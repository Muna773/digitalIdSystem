import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BiometricDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="biometricType" source="biometricType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="facialRecognition" source="facialRecognition" />
        <TextField label="fingerprint" source="fingerprint" />
        <TextField label="ID" source="id" />
        <TextField label="irisScan" source="irisScan" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
