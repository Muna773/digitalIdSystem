import * as graphql from "@nestjs/graphql";
import { TransportationService } from "./transportation.service";

export class TransportationResolver {
  constructor(protected readonly service: TransportationService) {}

  @graphql.Query(() => String)
  async GetRealTimeTransportationUpdates(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetRealTimeTransportationUpdates(args);
  }
}
