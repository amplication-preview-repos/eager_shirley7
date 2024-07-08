import { Job } from "../job/Job";
import { Photo } from "../photo/Photo";

export type RetouchTask = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  taskDescription: string | null;
  status?: "Option1" | null;
  jobs?: Array<Job>;
  photo?: Photo | null;
};
