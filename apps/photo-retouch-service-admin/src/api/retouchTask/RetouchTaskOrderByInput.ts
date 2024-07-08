import { SortOrder } from "../../util/SortOrder";

export type RetouchTaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  taskDescription?: SortOrder;
  status?: SortOrder;
  photoId?: SortOrder;
};
