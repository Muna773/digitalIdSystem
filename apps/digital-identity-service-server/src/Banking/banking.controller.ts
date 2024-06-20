import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BankingService } from "./banking.service";

@swagger.ApiTags("bankings")
@common.Controller("bankings")
export class BankingController {
  constructor(protected readonly service: BankingService) {}

  @common.Get("/banking/transaction-details")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTransactionDetails(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetTransactionDetails(body);
      }
}
