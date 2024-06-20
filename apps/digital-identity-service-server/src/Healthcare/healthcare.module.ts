import { Module } from "@nestjs/common";
import { HealthcareService } from "./healthcare.service";
import { HealthcareController } from "./healthcare.controller";
import { HealthcareResolver } from "./healthcare.resolver";

@Module({
  controllers: [HealthcareController],
  providers: [HealthcareService, HealthcareResolver],
  exports: [HealthcareService],
})
export class HealthcareModule {}
