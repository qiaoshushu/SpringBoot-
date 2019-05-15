package cn.superbio.judicial.realization.consumer;

import cn.superbio.judicial.realization.SysUserServiceApi;
import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("SPBBASE-REALICATION")
public interface SysUserServiceConsumer extends SysUserServiceApi {
}
