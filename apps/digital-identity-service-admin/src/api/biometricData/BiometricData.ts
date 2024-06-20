import { JsonValue } from "type-fest";

export type BiometricData = {
  biometricType?: "Option1" | null;
  createdAt: Date;
  facialRecognition: JsonValue;
  fingerprint: JsonValue;
  id: string;
  irisScan: JsonValue;
  updatedAt: Date;
};
