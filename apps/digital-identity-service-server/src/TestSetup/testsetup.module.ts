import { Module } from "@nestjs/common";
import { TestSetupService } from "./testsetup.service";
import { TestSetupController } from "./testsetup.controller";
import { TestSetupResolver } from "./testsetup.resolver";

@Module({
  controllers: [TestSetupController],
  providers: [TestSetupService, TestSetupResolver],
  exports: [TestSetupService],
})
export class TestSetupModule {}
