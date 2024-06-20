import { Injectable } from "@nestjs/common";

@Injectable()
export class ConsumerServicesService {
  constructor() {}
  async GetRealTimeAvailability(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
