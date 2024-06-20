import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TestSetupService } from "./testsetup.service";

@swagger.ApiTags("testSetups")
@common.Controller("testSetups")
export class TestSetupController {
  constructor(protected readonly service: TestSetupService) {}

  @common.Post("/integration-tests")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TestFileIntegrationTests(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.TestFileIntegrationTests(body);
      }

  @common.Post("/unit-tests")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TestFileUnitTests(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.TestFileUnitTests(body);
      }
}
