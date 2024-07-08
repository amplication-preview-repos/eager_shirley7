import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RETOUCHTASK_TITLE_FIELD } from "./RetouchTaskTitle";
import { PHOTO_TITLE_FIELD } from "../photo/PhotoTitle";

export const RetouchTaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="TaskDescription" source="taskDescription" />
        <TextField label="Status" source="status" />
        <ReferenceField label="Photo" source="photo.id" reference="Photo">
          <TextField source={PHOTO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Job" target="retouchTaskId" label="Jobs">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
