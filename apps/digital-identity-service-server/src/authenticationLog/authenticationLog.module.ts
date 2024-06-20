import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthenticationLogModuleBase } from "./base/authenticationLog.module.base";
import { AuthenticationLogService } from "./authenticationLog.service";
import { AuthenticationLogController } from "./authenticationLog.controller";
import { AuthenticationLogResolver } from "./authenticationLog.resolver";

@Module({
  imports: [AuthenticationLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthenticationLogController],
  providers: [AuthenticationLogService, AuthenticationLogResolver],
  exports: [AuthenticationLogService],
})
export class AuthenticationLogModule {}
