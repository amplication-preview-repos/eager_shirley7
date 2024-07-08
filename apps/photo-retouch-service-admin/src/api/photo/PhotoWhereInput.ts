import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RetouchTaskListRelationFilter } from "../retouchTask/RetouchTaskListRelationFilter";

export type PhotoWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  uploadedBy?: StringNullableFilter;
  retouchTasks?: RetouchTaskListRelationFilter;
};
