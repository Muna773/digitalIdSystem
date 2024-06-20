import { BiometricDataWhereInput } from "./BiometricDataWhereInput";
import { BiometricDataOrderByInput } from "./BiometricDataOrderByInput";

export type BiometricDataFindManyArgs = {
  where?: BiometricDataWhereInput;
  orderBy?: Array<BiometricDataOrderByInput>;
  skip?: number;
  take?: number;
};
