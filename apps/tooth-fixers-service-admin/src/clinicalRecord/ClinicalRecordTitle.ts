import { ClinicalRecord as TClinicalRecord } from "../api/clinicalRecord/ClinicalRecord";

export const CLINICALRECORD_TITLE_FIELD = "medicinePrescribed";

export const ClinicalRecordTitle = (record: TClinicalRecord): string => {
  return record.medicinePrescribed?.toString() || String(record.id);
};
