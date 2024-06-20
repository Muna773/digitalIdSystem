import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CitizenServiceBase } from "./base/citizen.service.base";

@Injectable()
export class CitizenService extends CitizenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
