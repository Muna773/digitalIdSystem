/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Credential as PrismaCredential } from "@prisma/client";

export class CredentialServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CredentialCountArgs, "select">
  ): Promise<number> {
    return this.prisma.credential.count(args);
  }

  async credentials(
    args: Prisma.CredentialFindManyArgs
  ): Promise<PrismaCredential[]> {
    return this.prisma.credential.findMany(args);
  }
  async credential(
    args: Prisma.CredentialFindUniqueArgs
  ): Promise<PrismaCredential | null> {
    return this.prisma.credential.findUnique(args);
  }
  async createCredential(
    args: Prisma.CredentialCreateArgs
  ): Promise<PrismaCredential> {
    return this.prisma.credential.create(args);
  }
  async updateCredential(
    args: Prisma.CredentialUpdateArgs
  ): Promise<PrismaCredential> {
    return this.prisma.credential.update(args);
  }
  async deleteCredential(
    args: Prisma.CredentialDeleteArgs
  ): Promise<PrismaCredential> {
    return this.prisma.credential.delete(args);
  }
}