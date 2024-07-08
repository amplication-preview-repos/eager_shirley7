import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RetouchTaskWhereUniqueInput } from "../retouchTask/RetouchTaskWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobWhereInput = {
  id?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  retouchTask?: RetouchTaskWhereUniqueInput;
  assignedTo?: StringNullableFilter;
};
