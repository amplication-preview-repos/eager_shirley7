import { RetouchTask as TRetouchTask } from "../api/retouchTask/RetouchTask";

export const RETOUCHTASK_TITLE_FIELD = "id";

export const RetouchTaskTitle = (record: TRetouchTask): string => {
  return record.id?.toString() || String(record.id);
};
