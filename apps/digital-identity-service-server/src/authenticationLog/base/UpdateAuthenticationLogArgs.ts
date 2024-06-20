/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthenticationLogWhereUniqueInput } from "./AuthenticationLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AuthenticationLogUpdateInput } from "./AuthenticationLogUpdateInput";

@ArgsType()
class UpdateAuthenticationLogArgs {
  @ApiProperty({
    required: true,
    type: () => AuthenticationLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AuthenticationLogWhereUniqueInput)
  @Field(() => AuthenticationLogWhereUniqueInput, { nullable: false })
  where!: AuthenticationLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AuthenticationLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => AuthenticationLogUpdateInput)
  @Field(() => AuthenticationLogUpdateInput, { nullable: false })
  data!: AuthenticationLogUpdateInput;
}

export { UpdateAuthenticationLogArgs as UpdateAuthenticationLogArgs };