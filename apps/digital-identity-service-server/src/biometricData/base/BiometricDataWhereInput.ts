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
import { EnumBiometricDataBiometricType } from "./EnumBiometricDataBiometricType";
import { IsEnum, IsOptional } from "class-validator";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class BiometricDataWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumBiometricDataBiometricType,
  })
  @IsEnum(EnumBiometricDataBiometricType)
  @IsOptional()
  @Field(() => EnumBiometricDataBiometricType, {
    nullable: true,
  })
  biometricType?: "Option1";

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  facialRecognition?: JsonFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  fingerprint?: JsonFilter;

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
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  irisScan?: JsonFilter;
}

export { BiometricDataWhereInput as BiometricDataWhereInput };