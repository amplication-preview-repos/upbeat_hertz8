import { ClinicalRecordUpdateManyWithoutBiodataItemsInput } from "./ClinicalRecordUpdateManyWithoutBiodataItemsInput";

export type BiodataUpdateInput = {
  clinicalRecords?: ClinicalRecordUpdateManyWithoutBiodataItemsInput;
  dateOfBirth?: Date | null;
  dateOfRegistration?: Date | null;
  firstName?: string | null;
  homeAddress?: string | null;
  middleName?: string | null;
  surname?: string | null;
};
