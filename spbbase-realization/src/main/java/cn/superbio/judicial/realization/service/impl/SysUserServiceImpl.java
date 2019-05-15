package cn.superbio.judicial.realization.service.impl;

import cn.superbio.judicial.realization.DO.SysUser;
import cn.superbio.judicial.realization.mapper.SysUserMapper;
import cn.superbio.judicial.realization.service.SysUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class SysUserServiceImpl extends ServiceImpl<SysUserMapper,SysUser> implements SysUserService {
}
