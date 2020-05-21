import Module from "..";
import { FunctionResponse } from "../../functions";
import { Warning, User } from "../shared";

interface SearchCriteria {
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

export interface GetUsersByFieldResponse extends FunctionResponse {
  /**
   * The array of users that match the provided field
   * crtieria.
   */
  users: User[];
}

/**
 * Functions for user-related actions.
 */
export default class UserModule extends Module {
  /**
   * Searches for users on the Moodle site that match
   * the provided crtieria.
   */
  public async getUsers(
    ...criteria: SearchCriteria[]
  ): Promise<GetUsersResponse> {
    return (await this.get("core_user_get_users", {
      criteria,
    })) as GetUsersResponse;
  }

  /**
   * Searches for users on the Moodle site that match
   * a specific field value.
   *
   * @param field  The name of the field to search.
   * @param values The value to search users' fields for.
   */
  public async getUsersByField(
    field: string,
    ...values: (string | number)[]
  ): Promise<GetUsersByFieldResponse> {
    const response = (await this.get("core_user_get_users_by_field", {
      field,
      values,
    })) as FunctionResponse;

    const users: GetUsersByFieldResponse = {
      users: [],
      getHttpResponse: response.getHttpResponse,
    };

    users.users = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return users;
  }
}
