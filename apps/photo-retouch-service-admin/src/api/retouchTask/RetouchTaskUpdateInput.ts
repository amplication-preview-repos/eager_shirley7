import { JobUpdateManyWithoutRetouchTasksInput } from "./JobUpdateManyWithoutRetouchTasksInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type RetouchTaskUpdateInput = {
  taskDescription?: string | null;
  status?: "Option1" | null;
  jobs?: JobUpdateManyWithoutRetouchTasksInput;
  photo?: PhotoWhereUniqueInput | null;
};
