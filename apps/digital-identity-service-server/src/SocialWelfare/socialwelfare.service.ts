import { Injectable } from "@nestjs/common";

@Injectable()
export class SocialWelfareService {
  constructor() {}
  async GetBenefitDetails(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
