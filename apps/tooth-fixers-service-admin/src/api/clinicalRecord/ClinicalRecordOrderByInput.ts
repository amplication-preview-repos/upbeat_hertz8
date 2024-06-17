import { SortOrder } from "../../util/SortOrder";

export type ClinicalRecordOrderByInput = {
  biodataId?: SortOrder;
  clinicDate?: SortOrder;
  createdAt?: SortOrder;
  dateOfNextAppointment?: SortOrder;
  id?: SortOrder;
  medicinePrescribed?: SortOrder;
  natureOfAilment?: SortOrder;
  procedureUndertaken?: SortOrder;
  updatedAt?: SortOrder;
};
