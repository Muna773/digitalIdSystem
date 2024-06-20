import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BiometricDataResolverBase } from "./base/biometricData.resolver.base";
import { BiometricData } from "./base/BiometricData";
import { BiometricDataService } from "./biometricData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BiometricData)
export class BiometricDataResolver extends BiometricDataResolverBase {
  constructor(
    protected readonly service: BiometricDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
