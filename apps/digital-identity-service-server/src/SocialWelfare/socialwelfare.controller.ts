import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SocialWelfareService } from "./socialwelfare.service";

@swagger.ApiTags("socialWelfares")
@common.Controller("socialWelfares")
export class SocialWelfareController {
  constructor(protected readonly service: SocialWelfareService) {}

  @common.Get("/socialwelfare/benefit-details")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetBenefitDetails(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetBenefitDetails(body);
      }
}
