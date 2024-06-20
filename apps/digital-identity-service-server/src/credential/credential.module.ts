import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CredentialModuleBase } from "./base/credential.module.base";
import { CredentialService } from "./credential.service";
import { CredentialController } from "./credential.controller";
import { CredentialResolver } from "./credential.resolver";

@Module({
  imports: [CredentialModuleBase, forwardRef(() => AuthModule)],
  controllers: [CredentialController],
  providers: [CredentialService, CredentialResolver],
  exports: [CredentialService],
})
export class CredentialModule {}
