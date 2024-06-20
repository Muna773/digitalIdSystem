import { CitizenWhereInput } from "./CitizenWhereInput";
import { CitizenOrderByInput } from "./CitizenOrderByInput";

export type CitizenFindManyArgs = {
  where?: CitizenWhereInput;
  orderBy?: Array<CitizenOrderByInput>;
  skip?: number;
  take?: number;
};
