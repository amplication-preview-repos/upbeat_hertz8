import { BiodataWhereInput } from "./BiodataWhereInput";
import { BiodataOrderByInput } from "./BiodataOrderByInput";

export type BiodataFindManyArgs = {
  where?: BiodataWhereInput;
  orderBy?: Array<BiodataOrderByInput>;
  skip?: number;
  take?: number;
};
