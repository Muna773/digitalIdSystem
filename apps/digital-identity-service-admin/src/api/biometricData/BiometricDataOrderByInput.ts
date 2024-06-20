import { SortOrder } from "../../util/SortOrder";

export type BiometricDataOrderByInput = {
  biometricType?: SortOrder;
  createdAt?: SortOrder;
  facialRecognition?: SortOrder;
  fingerprint?: SortOrder;
  id?: SortOrder;
  irisScan?: SortOrder;
  updatedAt?: SortOrder;
};
