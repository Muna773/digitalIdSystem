import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthenticationLogService } from "./authenticationLog.service";
import { AuthenticationLogControllerBase } from "./base/authenticationLog.controller.base";

@swagger.ApiTags("authenticationLogs")
@common.Controller("authenticationLogs")
export class AuthenticationLogController extends AuthenticationLogControllerBase {
  constructor(
    protected readonly service: AuthenticationLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
