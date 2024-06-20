import { Injectable } from "@nestjs/common";

@Injectable()
export class BankingService {
  constructor() {}
  async GetTransactionDetails(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
