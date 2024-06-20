import { Module } from "@nestjs/common";
import { AuthenticationLogModule } from "./authenticationLog/authenticationLog.module";
import { CitizenModule } from "./citizen/citizen.module";
import { BiometricDataModule } from "./biometricData/biometricData.module";
import { CredentialModule } from "./credential/credential.module";
import { UserModule } from "./user/user.module";
import { BankingModule } from "./Banking/banking.module";
import { ConsumerServicesModule } from "./ConsumerServices/consumerservices.module";
import { HealthcareModule } from "./Healthcare/healthcare.module";
import { SocialWelfareModule } from "./SocialWelfare/socialwelfare.module";
import { TestSetupModule } from "./TestSetup/testsetup.module";
import { TransportationModule } from "./Transportation/transportation.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    AuthenticationLogModule,
    CitizenModule,
    BiometricDataModule,
    CredentialModule,
    UserModule,
    BankingModule,
    ConsumerServicesModule,
    HealthcareModule,
    SocialWelfareModule,
    TestSetupModule,
    TransportationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
