import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BIODATA_TITLE_FIELD } from "../biodata/BiodataTitle";

export const ClinicalRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ClinicalRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Biodata" source="biodata.id" reference="Biodata">
          <TextField source={BIODATA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="clinicDate" source="clinicDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="dateOfNextAppointment"
          source="dateOfNextAppointment"
        />
        <TextField label="ID" source="id" />
        <TextField label="medicinePrescribed" source="medicinePrescribed" />
        <TextField label="natureOfAilment" source="natureOfAilment" />
        <TextField label="procedureUndertaken" source="procedureUndertaken" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
