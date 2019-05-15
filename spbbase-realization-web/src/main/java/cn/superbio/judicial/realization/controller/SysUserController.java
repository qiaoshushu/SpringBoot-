package cn.superbio.judicial.realization.controller;

import cn.superbio.judicial.realization.consumer.SysUserServiceConsumer;
import cn.superbio.judicial.realization.entity.SysUserEntity;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "认证中心用户接口")
@RequestMapping("/api/users")
@RestController
public class SysUserController {
    @Autowired
    private SysUserServiceConsumer userServiceConsumer;

    @ApiOperation(value = "查询用户列表", notes = "查询用户列表")
    @RequestMapping(value = "listUser", method = {RequestMethod.GET})
    public List<SysUserEntity> listUser(SysUserEntity query) {
        return userServiceConsumer.userList(query);
    }

    @ApiOperation(value = "获取单个用户管理信息", notes = "获取单个用户管理信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "用户ID", required = true, dataType = "long"),
    })
    @RequestMapping(value = "getUserId", method = {RequestMethod.GET})
    public SysUserEntity getUserId(@RequestParam("id") Long id) {
        return userServiceConsumer.getUserById(id);
    }

    @ApiOperation(value = "保存用户管理信息", notes = "保存用户管理信息")
    @RequestMapping(value = "save", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.CREATED)
    public boolean save(@RequestBody @Validated SysUserEntity user) {
        return userServiceConsumer.insertUser(user);
    }

    @ApiOperation(value = "更新用户管理信息", notes = "更新用户管理信息")
    @RequestMapping(value = "update", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.CREATED)
    public boolean update(@RequestBody @Validated SysUserEntity user) {
        return userServiceConsumer.updateUser(user);
    }

    @ApiOperation(value = "批量删除指定用户", notes = "批量删除指定用户")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "ids", value = "指定用户编号", dataType = "string", allowMultiple = true, required = true)
    })
    @RequestMapping(value = "removeBatch", method = {RequestMethod.GET})
    @ResponseStatus(value = HttpStatus.CREATED)
    public boolean removeBatch(@RequestParam("ids") List<String> ids) {
        return userServiceConsumer.removeUser(ids);
    }

   /* @ApiOperation(value = "用户启用/禁用状态", notes = "用户启用/禁用状态")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "ids", value = "用户编号", allowMultiple = true, dataType = "string", required = true),
            @ApiImplicitParam(name = "enabled", value = "新的状态", dataType = "int", required = true)
    })
    @RequestMapping(value = "/status", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.CREATED)
    public boolean status(@RequestParam("ids") List<String> ids, @RequestParam("enabled") int enabled) {
        return userServiceConsumer.updateUserStatus(ids, enabled);
    } */

    @ApiOperation(value = "批量修改用户密码", notes = "批量修改用户密码")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "ids", value = "用户编号", allowMultiple = true, dataType = "string", required = true),
            @ApiImplicitParam(name = "password", value = "新的状态", dataType = "int", required = true)
    })
    @RequestMapping(value = "/updatePass", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.CREATED)
    public boolean updatePass(@RequestParam("ids") List<String> ids, @RequestParam("password") String password) {
        return userServiceConsumer.updatePassWord(ids, password);
    }
}
