import Module from "..";
import FunctionResponse from "../../functions/response";

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

export interface User {
  /**
   * The unique identifier of the user.
   */
  id: number;

  /**
   * The user's Moodle username.
   */
  username: string;

  /**
   * The user's first name.
   */
  firstname: string;

  /**
   * The user's last name.
   */
  lastname: string;

  /**
   * The user's full name.
   */
  fullname: string;

  /**
   * The user's email address.
   */
  email: string;

  department: string;

  firstaccess: number;

  lastaccess: number;

  auth: string;

  /**
   * Whether the user's Moodle account is
   * suspended (true) or not (false).
   */
  suspended: boolean;

  /**
   * Whether the user's Moodle account is
   * confirmed (true) or not (false).
   */
  confirmed: boolean;

  /**
   * The user's user-specific language.
   */
  lang: string;

  /**
   * The name of the user's user-specific
   * Moodle theme.
   */
  theme: string;

  /**
   * The user's user-specific timezone.
   */
  timezone: string;

  mailformat: number;

  /**
   * The URL of the user's Moodle profile
   * image (small size).
   */
  profileimageurlsmall: string;

  /**
   * The URL of the user's Moodle profile
   * image.
   */
  profileimageurl: string;
}

export interface GetUsersResponse extends FunctionResponse {
  /**
   * The array of users that match the provided search
   * crtieria.
   */
  users: User[];

  warnings: unknown[];
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
  ): Promise<GetUsersResponse> {
    const response = (await this.get("core_user_get_users_by_field", {
      field,
      values,
    })) as FunctionResponse;

    const users: GetUsersResponse = {
      users: [],
      warnings: [],
      getHttpResponse: response.getHttpResponse,
    };

    users.users = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return users;
  }
}
