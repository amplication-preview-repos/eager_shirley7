import { RetouchTask } from "../retouchTask/RetouchTask";

export type Job = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date | null;
  retouchTask?: RetouchTask | null;
  assignedTo: string | null;
};
