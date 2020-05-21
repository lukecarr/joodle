import { FunctionResponse } from "../../../functions";
import { User, Warning } from "../../shared";

export interface SearchCriteria {
  /**
   * The name of the field used to search
   * for users.
   */
  key: string;

  /**
   * The field value to match when searching
   * for users.
   */
  value: string | number;
}

export interface GetUsersResponse extends FunctionResponse {
  /**
   * The array of users that match the provided search
   * crtieria.
   */
  users: User[];

  warnings?: Warning[];
}
