import { Biodata } from "../biodata/Biodata";

export type ClinicalRecord = {
  biodata?: Biodata | null;
  clinicDate: Date | null;
  createdAt: Date;
  dateOfNextAppointment: Date | null;
  id: string;
  medicinePrescribed: string | null;
  natureOfAilment: string | null;
  procedureUndertaken: string | null;
  updatedAt: Date;
};
