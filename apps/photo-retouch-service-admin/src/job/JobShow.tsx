import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RETOUCHTASK_TITLE_FIELD } from "../retouchTask/RetouchTaskTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="DueDate" source="dueDate" />
        <ReferenceField
          label="RetouchTask"
          source="retouchtask.id"
          reference="RetouchTask"
        >
          <TextField source={RETOUCHTASK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="AssignedTo" source="assignedTo" />
      </SimpleShowLayout>
    </Show>
  );
};
