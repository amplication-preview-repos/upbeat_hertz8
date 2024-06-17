import { ClinicalRecordCreateNestedManyWithoutBiodataItemsInput } from "./ClinicalRecordCreateNestedManyWithoutBiodataItemsInput";

export type BiodataCreateInput = {
  clinicalRecords?: ClinicalRecordCreateNestedManyWithoutBiodataItemsInput;
  dateOfBirth?: Date | null;
  dateOfRegistration?: Date | null;
  firstName?: string | null;
  homeAddress?: string | null;
  middleName?: string | null;
  surname?: string | null;
};
