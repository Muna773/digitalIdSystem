import { Module } from "@nestjs/common";
import { TransportationService } from "./transportation.service";
import { TransportationController } from "./transportation.controller";
import { TransportationResolver } from "./transportation.resolver";

@Module({
  controllers: [TransportationController],
  providers: [TransportationService, TransportationResolver],
  exports: [TransportationService],
})
export class TransportationModule {}
