import * as graphql from "@nestjs/graphql";
import { BankingService } from "./banking.service";

export class BankingResolver {
  constructor(protected readonly service: BankingService) {}

  @graphql.Query(() => String)
  async GetTransactionDetails(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetTransactionDetails(args);
  }
}
