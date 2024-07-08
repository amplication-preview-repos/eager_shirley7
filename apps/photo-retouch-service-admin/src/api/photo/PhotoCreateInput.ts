import { RetouchTaskCreateNestedManyWithoutPhotosInput } from "./RetouchTaskCreateNestedManyWithoutPhotosInput";

export type PhotoCreateInput = {
  url?: string | null;
  uploadedAt?: Date | null;
  uploadedBy?: string | null;
  retouchTasks?: RetouchTaskCreateNestedManyWithoutPhotosInput;
};
