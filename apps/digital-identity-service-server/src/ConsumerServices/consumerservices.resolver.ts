import * as graphql from "@nestjs/graphql";
import { ConsumerServicesService } from "./consumerservices.service";

export class ConsumerServicesResolver {
  constructor(protected readonly service: ConsumerServicesService) {}

  @graphql.Query(() => String)
  async GetRealTimeAvailability(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetRealTimeAvailability(args);
  }
}
