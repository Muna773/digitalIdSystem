import { Module } from "@nestjs/common";
import { SocialWelfareService } from "./socialwelfare.service";
import { SocialWelfareController } from "./socialwelfare.controller";
import { SocialWelfareResolver } from "./socialwelfare.resolver";

@Module({
  controllers: [SocialWelfareController],
  providers: [SocialWelfareService, SocialWelfareResolver],
  exports: [SocialWelfareService],
})
export class SocialWelfareModule {}
