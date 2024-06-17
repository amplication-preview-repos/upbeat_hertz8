import { SortOrder } from "../../util/SortOrder";

export type BiodataOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  dateOfRegistration?: SortOrder;
  firstName?: SortOrder;
  homeAddress?: SortOrder;
  id?: SortOrder;
  middleName?: SortOrder;
  surname?: SortOrder;
  updatedAt?: SortOrder;
};
