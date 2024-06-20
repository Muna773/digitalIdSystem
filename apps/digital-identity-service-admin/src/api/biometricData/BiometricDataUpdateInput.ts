import { InputJsonValue } from "../../types";

export type BiometricDataUpdateInput = {
  biometricType?: "Option1" | null;
  facialRecognition?: InputJsonValue;
  fingerprint?: InputJsonValue;
  irisScan?: InputJsonValue;
};
