import { BiometricData as TBiometricData } from "../api/biometricData/BiometricData";

export const BIOMETRICDATA_TITLE_FIELD = "id";

export const BiometricDataTitle = (record: TBiometricData): string => {
  return record.id?.toString() || String(record.id);
};
