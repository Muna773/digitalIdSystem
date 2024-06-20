import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectInput } from "react-admin";

export const BiometricDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="biometricType"
          label="biometricType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
