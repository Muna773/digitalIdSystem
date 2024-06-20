import { Injectable } from "@nestjs/common";

@Injectable()
export class TransportationService {
  constructor() {}
  async GetRealTimeTransportationUpdates(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
