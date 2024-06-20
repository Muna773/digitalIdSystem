import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectInput } from "react-admin";

export const BiometricDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
