import { JobCreateNestedManyWithoutRetouchTasksInput } from "./JobCreateNestedManyWithoutRetouchTasksInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type RetouchTaskCreateInput = {
  taskDescription?: string | null;
  status?: "Option1" | null;
  jobs?: JobCreateNestedManyWithoutRetouchTasksInput;
  photo?: PhotoWhereUniqueInput | null;
};
