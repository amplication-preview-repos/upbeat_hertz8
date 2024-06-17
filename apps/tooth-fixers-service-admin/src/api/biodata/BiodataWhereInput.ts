import { ClinicalRecordListRelationFilter } from "../clinicalRecord/ClinicalRecordListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BiodataWhereInput = {
  clinicalRecords?: ClinicalRecordListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  dateOfRegistration?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  homeAddress?: StringNullableFilter;
  id?: StringFilter;
  middleName?: StringNullableFilter;
  surname?: StringNullableFilter;
};
