import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthenticationLogServiceBase } from "./base/authenticationLog.service.base";

@Injectable()
export class AuthenticationLogService extends AuthenticationLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
