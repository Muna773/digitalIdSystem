import { InputJsonValue } from "../../types";

export type BiometricDataCreateInput = {
  biometricType?: "Option1" | null;
  facialRecognition?: InputJsonValue;
  fingerprint?: InputJsonValue;
  irisScan?: InputJsonValue;
};
