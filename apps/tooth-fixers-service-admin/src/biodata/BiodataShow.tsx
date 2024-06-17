import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BIODATA_TITLE_FIELD } from "./BiodataTitle";

export const BiodataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="dateOfRegistration" source="dateOfRegistration" />
        <TextField label="firstName" source="firstName" />
        <TextField label="homeAddress" source="homeAddress" />
        <TextField label="ID" source="id" />
        <TextField label="middleName" source="middleName" />
        <TextField label="surname" source="surname" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ClinicalRecord"
          target="biodataId"
          label="ClinicalRecords"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Biodata"
              source="biodata.id"
              reference="Biodata"
            >
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
            <TextField
              label="procedureUndertaken"
              source="procedureUndertaken"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
