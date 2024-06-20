import { Module } from "@nestjs/common";
import { ConsumerServicesService } from "./consumerservices.service";
import { ConsumerServicesController } from "./consumerservices.controller";
import { ConsumerServicesResolver } from "./consumerservices.resolver";

@Module({
  controllers: [ConsumerServicesController],
  providers: [ConsumerServicesService, ConsumerServicesResolver],
  exports: [ConsumerServicesService],
})
export class ConsumerServicesModule {}
