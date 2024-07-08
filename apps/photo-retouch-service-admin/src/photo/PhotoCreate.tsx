import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RetouchTaskTitle } from "../retouchTask/RetouchTaskTitle";

export const PhotoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="URL" source="url" />
        <DateTimeInput label="UploadedAt" source="uploadedAt" />
        <TextInput label="UploadedBy" source="uploadedBy" />
        <ReferenceArrayInput
          source="retouchTasks"
          reference="RetouchTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RetouchTaskTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
