import { RetouchTask } from "../retouchTask/RetouchTask";

export type Photo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  uploadedAt: Date | null;
  uploadedBy: string | null;
  retouchTasks?: Array<RetouchTask>;
};
