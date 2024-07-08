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
import { RETOUCHTASK_TITLE_FIELD } from "../retouchTask/RetouchTaskTitle";

export const JobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Jobs"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
