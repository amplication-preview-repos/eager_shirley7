import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { RetouchTaskTitle } from "../retouchTask/RetouchTaskTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
