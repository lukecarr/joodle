import { FunctionResponse } from "../../../functions";
import { User, Warning } from "../../shared";

export interface SearchCriteria {
  /**
   * The name of the field used to search for users.
   */
  key:
    | "id"
    | "lastname"
    | "firstname"
    | "idnumber"
    | "username"
    | "email"
    | "auth";

  /**
   * The field value to match when searching for users.
   */
  value: string | number;
}

export interface GetUsersResponse extends FunctionResponse {
  /**
   * The array of users that match the provided search criteria.
   */
  users: User[];

  warnings?: Warning[];
}
