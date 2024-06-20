import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { HealthcareService } from "./healthcare.service";

@swagger.ApiTags("healthcares")
@common.Controller("healthcares")
export class HealthcareController {
  constructor(protected readonly service: HealthcareService) {}

  @common.Get("/healthcare/patient-records")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPatientRecords(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetPatientRecords(body);
      }
}
