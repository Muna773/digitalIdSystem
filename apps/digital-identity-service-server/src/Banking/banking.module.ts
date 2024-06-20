import { Module } from "@nestjs/common";
import { BankingService } from "./banking.service";
import { BankingController } from "./banking.controller";
import { BankingResolver } from "./banking.resolver";

@Module({
  controllers: [BankingController],
  providers: [BankingService, BankingResolver],
  exports: [BankingService],
})
export class BankingModule {}
