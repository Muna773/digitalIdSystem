import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AuthenticationLogResolverBase } from "./base/authenticationLog.resolver.base";
import { AuthenticationLog } from "./base/AuthenticationLog";
import { AuthenticationLogService } from "./authenticationLog.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AuthenticationLog)
export class AuthenticationLogResolver extends AuthenticationLogResolverBase {
  constructor(
    protected readonly service: AuthenticationLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
