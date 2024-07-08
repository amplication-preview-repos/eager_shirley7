import { RetouchTaskWhereInput } from "./RetouchTaskWhereInput";
import { RetouchTaskOrderByInput } from "./RetouchTaskOrderByInput";

export type RetouchTaskFindManyArgs = {
  where?: RetouchTaskWhereInput;
  orderBy?: Array<RetouchTaskOrderByInput>;
  skip?: number;
  take?: number;
};
