import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BiometricDataService } from "./biometricData.service";
import { BiometricDataControllerBase } from "./base/biometricData.controller.base";

@swagger.ApiTags("biometricData")
@common.Controller("biometricData")
export class BiometricDataController extends BiometricDataControllerBase {
  constructor(
    protected readonly service: BiometricDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
