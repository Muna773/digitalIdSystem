import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CitizenModuleBase } from "./base/citizen.module.base";
import { CitizenService } from "./citizen.service";
import { CitizenController } from "./citizen.controller";
import { CitizenResolver } from "./citizen.resolver";

@Module({
  imports: [CitizenModuleBase, forwardRef(() => AuthModule)],
  controllers: [CitizenController],
  providers: [CitizenService, CitizenResolver],
  exports: [CitizenService],
})
export class CitizenModule {}
