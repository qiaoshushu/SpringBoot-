package cn.superbio.judicial.realization.provider;

import cn.superbio.judicial.realization.SysUserServiceApi;
import cn.superbio.judicial.realization.DO.SysUser;
import cn.superbio.judicial.realization.entity.SysUserEntity;
import cn.superbio.judicial.realization.service.SysUserService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.dozer.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
@RestController
public class SysUserServiceProvider implements SysUserServiceApi {

    @Autowired
    private SysUserService sysUserService;
    @Autowired
    private Mapper dozerMapper;

    @Override
    public SysUserEntity getUserById(@RequestParam("id") Long id) {
        SysUser byId = sysUserService.getById(id);
        return dozerMapper.map(byId,SysUserEntity.class);
    }

    @Override
    public boolean insertUser(@RequestBody SysUserEntity user) {
        SysUser sysUser = dozerMapper.map(user, SysUser.class);
        return sysUserService.save(sysUser);
    }

    @Override
    public List<SysUserEntity> userList(@RequestBody SysUserEntity userQuery) {
        QueryWrapper<SysUser> sysUserQueryWrapper = new QueryWrapper<>();
        sysUserQueryWrapper.like(userQuery.getLoginName()!=null,"login_name",userQuery.getLoginName())
                .like(userQuery.getName()!=null,"name",userQuery.getName());
        List<SysUser> list = sysUserService.list(sysUserQueryWrapper);
        return dozerMapper.map(list,List.class);
    }

    @Override
    public boolean updateUser(@RequestBody SysUserEntity user) {
        SysUser sysUser = dozerMapper.map(user, SysUser.class);
        return sysUserService.updateById(sysUser);
    }
    // 是否只读
   /* @Override
    public boolean updateUserStatus(List<String> ids, int enabled) {
        Collection<SysUser> authUsers = sysUserService.listByIds(ids);
        for (SysUser sysUser : authUsers) {
            sysUser.setEnabled(enabled);
        }
        return sysUserService.updateBatchById(authUsers);
    } */
    // 修改密码
    @Override
    public boolean updatePassWord(@RequestParam("ids") List<String> ids, @RequestParam("password") String password) {
        Collection<SysUser> authUsers = sysUserService.listByIds(ids);
        for (SysUser sysUser : authUsers) {
            sysUser.setPassword(password);
        }
        return sysUserService.updateBatchById(authUsers);
    }
    // 条数
    @Override
    public int countUser(@RequestBody SysUserEntity user) {
        QueryWrapper<SysUser> queryWrapper = new QueryWrapper<>();
        return sysUserService.count(queryWrapper);
    }
    // 删除
    @Override
    public boolean removeUser(@RequestParam("ids")List<String> ids) {
        return sysUserService.removeByIds(ids);
    }
}
