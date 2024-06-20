import * as graphql from "@nestjs/graphql";
import { SocialWelfareService } from "./socialwelfare.service";

export class SocialWelfareResolver {
  constructor(protected readonly service: SocialWelfareService) {}

  @graphql.Query(() => String)
  async GetBenefitDetails(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetBenefitDetails(args);
  }
}
