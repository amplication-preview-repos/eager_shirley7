import { RetouchTaskWhereUniqueInput } from "../retouchTask/RetouchTaskWhereUniqueInput";

export type JobUpdateInput = {
  dueDate?: Date | null;
  retouchTask?: RetouchTaskWhereUniqueInput | null;
  assignedTo?: string | null;
};
