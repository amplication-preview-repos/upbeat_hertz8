import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BIODATA_TITLE_FIELD } from "../biodata/BiodataTitle";

export const ClinicalRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
