package cn.superbio.judicial.realization;

import cn.superbio.judicial.realization.entity.SysUserEntity;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用户管理服务接口
 */
@Api(tags = "用户管理服务接口")
@RequestMapping("/service/api/sysUser")
public interface SysUserServiceApi {
    /**
     * 查询单个
     */
    @ApiOperation(value = "获取用户信息接口", notes = "获取用户信息接口")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "用户id", required = true, paramType = "query", example = "22")
    })
    @RequestMapping(value = "/getUserById", method = RequestMethod.GET)
    SysUserEntity getUserById(@RequestParam("id") Long id);

    /**
     * 添加
     */
    @ApiOperation(value = "添加用户信息接口", notes = "添加用户信息")
    @RequestMapping(value = "/insertUser", method = RequestMethod.POST)
    boolean insertUser(@RequestBody SysUserEntity user);

    /**
     * 查询List
     */
    @ApiOperation(value = "根据条件查询用户接口", notes = "根据条件查询用户")
    @RequestMapping(value = "/userList", method = RequestMethod.POST)
    List<SysUserEntity> userList(@RequestBody SysUserEntity userQuery);

    /**
     * 修改
     */
    @ApiOperation(value = "修改用户信息", notes = "修改用户信息")
    @RequestMapping(value = "/updateUser", method = RequestMethod.POST)
    boolean updateUser(@RequestBody SysUserEntity user);

    /**
     * 修改状态
     */
   /* @ApiOperation(value = "修改用户启用/禁用状态", notes = "修改用户启用/禁用状态")
    @RequestMapping(value = "/updateUserStatus", method = RequestMethod.POST)
    boolean updateUserStatus(@RequestParam("ids") List<String> ids, @RequestParam("enabled") int enabled); */

    /**
     * 修改密码
     */
    @ApiOperation(value = "修改密码", notes = "修改密码")
    @RequestMapping(value = "/updatePassWord", method = RequestMethod.POST)
    boolean updatePassWord(@RequestParam("ids") List<String> ids, @RequestParam("password") String password);

    /**
     * 总条数
     */
    @ApiOperation(value = "查询用户信息列表总记录数", notes = "查询用户信息列表总记录数")
    @RequestMapping(value = "countUser", method = RequestMethod.POST)
    int countUser(@RequestBody SysUserEntity user);

    /**
     * 批量删除
     */
    @ApiOperation(value = "批量删除用户信息接口", notes = "批量删除用户信息接口")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "ids", value = "指定案例编号", dataType = "String", allowMultiple = true, required = true)

    })
    @RequestMapping(value = "/removeUser", method = RequestMethod.GET)
    boolean removeUser(@RequestParam("ids") List<String> ids);

}
