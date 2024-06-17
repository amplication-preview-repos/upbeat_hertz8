import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BiodataTitle } from "../biodata/BiodataTitle";

export const ClinicalRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="biodata.id" reference="Biodata" label="Biodata">
          <SelectInput optionText={BiodataTitle} />
        </ReferenceInput>
        <DateTimeInput label="clinicDate" source="clinicDate" />
        <DateTimeInput
          label="dateOfNextAppointment"
          source="dateOfNextAppointment"
        />
        <TextInput label="medicinePrescribed" source="medicinePrescribed" />
        <TextInput label="natureOfAilment" multiline source="natureOfAilment" />
        <TextInput
          label="procedureUndertaken"
          multiline
          source="procedureUndertaken"
        />
      </SimpleForm>
    </Edit>
  );
};
