import { Injectable } from "@nestjs/common";

@Injectable()
export class TestSetupService {
  constructor() {}
  async TestFileIntegrationTests(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async TestFileUnitTests(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
