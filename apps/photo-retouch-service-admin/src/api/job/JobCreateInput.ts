import { RetouchTaskWhereUniqueInput } from "../retouchTask/RetouchTaskWhereUniqueInput";

export type JobCreateInput = {
  dueDate?: Date | null;
  retouchTask?: RetouchTaskWhereUniqueInput | null;
  assignedTo?: string | null;
};
