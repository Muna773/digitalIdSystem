/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCredentialCredentialType } from "./EnumCredentialCredentialType";
import { IsEnum, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { EnumCredentialStatus } from "./EnumCredentialStatus";

@InputType()
class CredentialUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumCredentialCredentialType,
  })
  @IsEnum(EnumCredentialCredentialType)
  @IsOptional()
  @Field(() => EnumCredentialCredentialType, {
    nullable: true,
  })
  credentialType?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expiresAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  issuedAt?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumCredentialStatus,
  })
  @IsEnum(EnumCredentialStatus)
  @IsOptional()
  @Field(() => EnumCredentialStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { CredentialUpdateInput as CredentialUpdateInput };
