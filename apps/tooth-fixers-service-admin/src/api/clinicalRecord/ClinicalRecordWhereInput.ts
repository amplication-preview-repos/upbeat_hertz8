import { BiodataWhereUniqueInput } from "../biodata/BiodataWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClinicalRecordWhereInput = {
  biodata?: BiodataWhereUniqueInput;
  clinicDate?: DateTimeNullableFilter;
  dateOfNextAppointment?: DateTimeNullableFilter;
  id?: StringFilter;
  medicinePrescribed?: StringNullableFilter;
  natureOfAilment?: StringNullableFilter;
  procedureUndertaken?: StringNullableFilter;
};
