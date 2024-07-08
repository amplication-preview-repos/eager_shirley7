import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  uploadedAt?: SortOrder;
  uploadedBy?: SortOrder;
};
