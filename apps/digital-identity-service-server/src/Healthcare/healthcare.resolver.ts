import * as graphql from "@nestjs/graphql";
import { HealthcareService } from "./healthcare.service";

export class HealthcareResolver {
  constructor(protected readonly service: HealthcareService) {}

  @graphql.Query(() => String)
  async GetPatientRecords(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetPatientRecords(args);
  }
}
