import { RetouchTaskUpdateManyWithoutPhotosInput } from "./RetouchTaskUpdateManyWithoutPhotosInput";

export type PhotoUpdateInput = {
  url?: string | null;
  uploadedAt?: Date | null;
  uploadedBy?: string | null;
  retouchTasks?: RetouchTaskUpdateManyWithoutPhotosInput;
};
