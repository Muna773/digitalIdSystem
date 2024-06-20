import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BiometricDataModuleBase } from "./base/biometricData.module.base";
import { BiometricDataService } from "./biometricData.service";
import { BiometricDataController } from "./biometricData.controller";
import { BiometricDataResolver } from "./biometricData.resolver";

@Module({
  imports: [BiometricDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [BiometricDataController],
  providers: [BiometricDataService, BiometricDataResolver],
  exports: [BiometricDataService],
})
export class BiometricDataModule {}
