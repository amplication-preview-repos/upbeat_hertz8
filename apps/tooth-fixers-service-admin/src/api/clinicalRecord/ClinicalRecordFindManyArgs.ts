import { ClinicalRecordWhereInput } from "./ClinicalRecordWhereInput";
import { ClinicalRecordOrderByInput } from "./ClinicalRecordOrderByInput";

export type ClinicalRecordFindManyArgs = {
  where?: ClinicalRecordWhereInput;
  orderBy?: Array<ClinicalRecordOrderByInput>;
  skip?: number;
  take?: number;
};
