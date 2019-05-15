package cn.superbio.judicial.realization.autoconfigure;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan( "cn.superbio.judicial.realization.mapper*" )
@ComponentScan(basePackages = {"cn.superbio.judicial.realization.provider", "cn.superbio.judicial.realization.service"})
public class BizCasesAutoConfiguration {
}
