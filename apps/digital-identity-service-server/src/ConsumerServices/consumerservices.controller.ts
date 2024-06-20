import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ConsumerServicesService } from "./consumerservices.service";

@swagger.ApiTags("consumerServices")
@common.Controller("consumerServices")
export class ConsumerServicesController {
  constructor(protected readonly service: ConsumerServicesService) {}

  @common.Get("/consumerservices/real-time-availability")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetRealTimeAvailability(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetRealTimeAvailability(body);
      }
}
