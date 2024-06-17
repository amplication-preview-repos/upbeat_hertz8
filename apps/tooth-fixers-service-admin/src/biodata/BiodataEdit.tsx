import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClinicalRecordTitle } from "../clinicalRecord/ClinicalRecordTitle";

export const BiodataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="clinicalRecords"
          reference="ClinicalRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClinicalRecordTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <DateTimeInput label="dateOfRegistration" source="dateOfRegistration" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="homeAddress" source="homeAddress" />
        <TextInput label="middleName" source="middleName" />
        <TextInput label="surname" source="surname" />
      </SimpleForm>
    </Edit>
  );
};
