import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type RetouchTaskWhereInput = {
  id?: StringFilter;
  taskDescription?: StringNullableFilter;
  status?: "Option1";
  jobs?: JobListRelationFilter;
  photo?: PhotoWhereUniqueInput;
};
