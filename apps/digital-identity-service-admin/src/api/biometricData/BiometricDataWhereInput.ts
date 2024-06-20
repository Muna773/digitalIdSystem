import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type BiometricDataWhereInput = {
  biometricType?: "Option1";
  facialRecognition?: JsonFilter;
  fingerprint?: JsonFilter;
  id?: StringFilter;
  irisScan?: JsonFilter;
};
