import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { RetouchTaskTitle } from "../retouchTask/RetouchTaskTitle";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="DueDate" source="dueDate" />
        <ReferenceInput
          source="retouchTask.id"
          reference="RetouchTask"
          label="RetouchTask"
        >
          <SelectInput optionText={RetouchTaskTitle} />
        </ReferenceInput>
        <TextInput label="AssignedTo" source="assignedTo" />
      </SimpleForm>
    </Create>
  );
};
