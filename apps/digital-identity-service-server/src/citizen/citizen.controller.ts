import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CitizenService } from "./citizen.service";
import { CitizenControllerBase } from "./base/citizen.controller.base";

@swagger.ApiTags("citizens")
@common.Controller("citizens")
export class CitizenController extends CitizenControllerBase {
  constructor(
    protected readonly service: CitizenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
