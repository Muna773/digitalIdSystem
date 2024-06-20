import * as graphql from "@nestjs/graphql";
import { TestSetupService } from "./testsetup.service";

export class TestSetupResolver {
  constructor(protected readonly service: TestSetupService) {}

  @graphql.Mutation(() => String)
  async TestFileIntegrationTests(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.TestFileIntegrationTests(args);
  }

  @graphql.Mutation(() => String)
  async TestFileUnitTests(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.TestFileUnitTests(args);
  }
}
