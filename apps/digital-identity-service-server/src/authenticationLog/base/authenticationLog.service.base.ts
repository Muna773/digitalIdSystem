/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AuthenticationLog as PrismaAuthenticationLog,
} from "@prisma/client";

export class AuthenticationLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AuthenticationLogCountArgs, "select">
  ): Promise<number> {
    return this.prisma.authenticationLog.count(args);
  }

  async authenticationLogs(
    args: Prisma.AuthenticationLogFindManyArgs
  ): Promise<PrismaAuthenticationLog[]> {
    return this.prisma.authenticationLog.findMany(args);
  }
  async authenticationLog(
    args: Prisma.AuthenticationLogFindUniqueArgs
  ): Promise<PrismaAuthenticationLog | null> {
    return this.prisma.authenticationLog.findUnique(args);
  }
  async createAuthenticationLog(
    args: Prisma.AuthenticationLogCreateArgs
  ): Promise<PrismaAuthenticationLog> {
    return this.prisma.authenticationLog.create(args);
  }
  async updateAuthenticationLog(
    args: Prisma.AuthenticationLogUpdateArgs
  ): Promise<PrismaAuthenticationLog> {
    return this.prisma.authenticationLog.update(args);
  }
  async deleteAuthenticationLog(
    args: Prisma.AuthenticationLogDeleteArgs
  ): Promise<PrismaAuthenticationLog> {
    return this.prisma.authenticationLog.delete(args);
  }
}
