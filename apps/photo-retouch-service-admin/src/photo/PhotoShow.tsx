import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PHOTO_TITLE_FIELD } from "./PhotoTitle";

export const PhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
        <TextField label="UploadedAt" source="uploadedAt" />
        <TextField label="UploadedBy" source="uploadedBy" />
        <ReferenceManyField
          reference="RetouchTask"
          target="photoId"
          label="RetouchTasks"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="TaskDescription" source="taskDescription" />
            <TextField label="Status" source="status" />
            <ReferenceField label="Photo" source="photo.id" reference="Photo">
              <TextField source={PHOTO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
