import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CredentialService } from "./credential.service";
import { CredentialControllerBase } from "./base/credential.controller.base";

@swagger.ApiTags("credentials")
@common.Controller("credentials")
export class CredentialController extends CredentialControllerBase {
  constructor(
    protected readonly service: CredentialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
