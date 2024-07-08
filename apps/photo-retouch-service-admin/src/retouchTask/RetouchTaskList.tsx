import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PHOTO_TITLE_FIELD } from "../photo/PhotoTitle";

export const RetouchTaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RetouchTasks"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
