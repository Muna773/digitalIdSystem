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
import { EnumAuthenticationLogAuthenticationMethod } from "./EnumAuthenticationLogAuthenticationMethod";
import { IsEnum, IsOptional } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { EnumAuthenticationLogResult } from "./EnumAuthenticationLogResult";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class AuthenticationLogWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumAuthenticationLogAuthenticationMethod,
  })
  @IsEnum(EnumAuthenticationLogAuthenticationMethod)
  @IsOptional()
  @Field(() => EnumAuthenticationLogAuthenticationMethod, {
    nullable: true,
  })
  authenticationMethod?: "Option1";

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  citizenId?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumAuthenticationLogResult,
  })
  @IsEnum(EnumAuthenticationLogResult)
  @IsOptional()
  @Field(() => EnumAuthenticationLogResult, {
    nullable: true,
  })
  result?: "Option1";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  timestamp?: DateTimeNullableFilter;
}

export { AuthenticationLogWhereInput as AuthenticationLogWhereInput };
