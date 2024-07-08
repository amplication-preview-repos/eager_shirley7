import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "assignedTo";

export const JobTitle = (record: TJob): string => {
  return record.assignedTo?.toString() || String(record.id);
};
