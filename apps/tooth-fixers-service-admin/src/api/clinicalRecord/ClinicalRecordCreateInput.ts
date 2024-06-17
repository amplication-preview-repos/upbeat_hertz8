import { BiodataWhereUniqueInput } from "../biodata/BiodataWhereUniqueInput";

export type ClinicalRecordCreateInput = {
  biodata?: BiodataWhereUniqueInput | null;
  clinicDate?: Date | null;
  dateOfNextAppointment?: Date | null;
  medicinePrescribed?: string | null;
  natureOfAilment?: string | null;
  procedureUndertaken?: string | null;
};
