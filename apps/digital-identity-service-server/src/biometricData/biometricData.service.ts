import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BiometricDataServiceBase } from "./base/biometricData.service.base";

@Injectable()
export class BiometricDataService extends BiometricDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
