import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BiodataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BiodataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="dateOfRegistration" source="dateOfRegistration" />
        <TextField label="firstName" source="firstName" />
        <TextField label="homeAddress" source="homeAddress" />
        <TextField label="ID" source="id" />
        <TextField label="middleName" source="middleName" />
        <TextField label="surname" source="surname" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
