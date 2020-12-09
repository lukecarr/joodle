import { FunctionResponse } from "../../../functions";
import { User } from "../../shared";

export interface GetUsersByFieldResponse extends FunctionResponse {
  /**
   * The array of users that match the provided field
   * criteria.
   */
  users: User[];
}
