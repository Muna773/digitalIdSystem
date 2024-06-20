import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BiometricDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BiometricDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="biometricType" source="biometricType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="facialRecognition" source="facialRecognition" />
        <TextField label="fingerprint" source="fingerprint" />
        <TextField label="ID" source="id" />
        <TextField label="irisScan" source="irisScan" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
