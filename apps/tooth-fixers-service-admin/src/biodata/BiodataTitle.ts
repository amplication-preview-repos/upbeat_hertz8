import { Biodata as TBiodata } from "../api/biodata/Biodata";

export const BIODATA_TITLE_FIELD = "firstName";

export const BiodataTitle = (record: TBiodata): string => {
  return record.firstName?.toString() || String(record.id);
};
