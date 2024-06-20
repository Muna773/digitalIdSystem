import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthcareService {
  constructor() {}
  async GetPatientRecords(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
