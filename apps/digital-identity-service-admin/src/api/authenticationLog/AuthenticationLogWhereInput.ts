import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AuthenticationLogWhereInput = {
  authenticationMethod?: "Option1";
  citizenId?: IntNullableFilter;
  id?: StringFilter;
  result?: "Option1";
  timestamp?: DateTimeNullableFilter;
};
