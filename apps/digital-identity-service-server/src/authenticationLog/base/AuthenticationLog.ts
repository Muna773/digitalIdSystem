/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumAuthenticationLogAuthenticationMethod } from "./EnumAuthenticationLogAuthenticationMethod";
import { IsEnum, IsOptional, IsInt, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumAuthenticationLogResult } from "./EnumAuthenticationLogResult";

@ObjectType()
class AuthenticationLog {
  @ApiProperty({
    required: false,
    enum: EnumAuthenticationLogAuthenticationMethod,
  })
  @IsEnum(EnumAuthenticationLogAuthenticationMethod)
  @IsOptional()
  @Field(() => EnumAuthenticationLogAuthenticationMethod, {
    nullable: true,
  })
  authenticationMethod?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  citizenId!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumAuthenticationLogResult,
  })
  @IsEnum(EnumAuthenticationLogResult)
  @IsOptional()
  @Field(() => EnumAuthenticationLogResult, {
    nullable: true,
  })
  result?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { AuthenticationLog as AuthenticationLog };
