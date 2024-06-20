import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TransportationService } from "./transportation.service";

@swagger.ApiTags("transportation")
@common.Controller("transportation")
export class TransportationController {
  constructor(protected readonly service: TransportationService) {}

  @common.Get("/transportation/real-time-updates")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetRealTimeTransportationUpdates(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetRealTimeTransportationUpdates(body);
      }
}
