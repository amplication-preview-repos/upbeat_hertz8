import { ClinicalRecord } from "../clinicalRecord/ClinicalRecord";

export type Biodata = {
  clinicalRecords?: Array<ClinicalRecord>;
  createdAt: Date;
  dateOfBirth: Date | null;
  dateOfRegistration: Date | null;
  firstName: string | null;
  homeAddress: string | null;
  id: string;
  middleName: string | null;
  surname: string | null;
  updatedAt: Date;
};
