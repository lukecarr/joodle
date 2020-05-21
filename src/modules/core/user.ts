import Module from "..";
import FunctionResponse from "../../functions/response";
import Warning from "../shared/warning";

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

interface CustomField {
  /**
   * The type of field (such as text field
   * or checkbox).
   */
  type: string;

  /**
   * The field's value.
   */
  value: string;

  /**
   * The field's name.
   */
  name: string;

  /**
   * The field's shortname.
   */
  shortname: string;
}

interface Preference {
  /**
   * The preference's name.
   */
  name: string;

  /**
   * The preference's value.
   */
  value: string;
}

export interface User {
  /**
   * The unique identifier of the user.
   */
  id: number;

  /**
   * The user's Moodle username.
   */
  username?: string;

  /**
   * The user's first name.
   */
  firstname?: string;

  /**
   * The user's last name.
   */
  lastname?: string;

  /**
   * The user's full name.
   */
  fullname: string;

  /**
   * The user's email address.
   */
  email?: string;

  /**
   * The user's postal address.
   */
  address?: string;

  /**
   * The user's first phone number.
   */
  phone1?: string;

  /**
   * The user's second phone number.
   */
  phone2?: string;

  /**
   * The user's ICQ number.
   */
  icq?: string;

  /**
   * The user's Skype username.
   */
  skype?: string;

  /**
   * The user's Yahoo username.
   */
  yahoo?: string;

  /**
   * The user's AIM screen name.
   */
  aim?: string;

  /**
   * The user's MSN username.
   */
  msn?: string;

  /**
   * The user's organizational department.
   */
  department?: string;

  /**
   * The user's instituion.
   */
  institution?: string;

  /**
   * An arbitrary ID number for the user (sometimes
   * from their institution).
   */
  idnumber?: string;

  /**
   * The user's interests, separated by commas.
   */
  interests?: string;

  /**
   * The UNIX timestamp of the first time the user
   * accessed the Moodle site. This value is 0 if
   * the user has never accessed the site.
   */
  firstaccess?: number;

  /**
   * The UNIX timestamp of the last time the user
   * accessed the Moodle site. This value is 0 if
   * the user has never accessed the site.
   */
  lastaccess?: number;

  /**
   * The authentication plugin this user uses,
   * such as `manual` or `ldap`.
   */
  auth?: string;

  /**
   * Whether the user's Moodle account is
   * suspended (true) or not (false). A suspended
   * user is prevented from signing in to Moodle.
   */
  suspended?: boolean;

  /**
   * Whether the user's Moodle account is
   * confirmed (true) or not (false).
   */
  confirmed?: boolean;

  /**
   * The user's user-specific language, such as
   * `en` or `en_ar` (pirate language).
   */
  lang?: string;

  /**
   * The user's user-specific calendar type,
   * such as `gregorian`.
   */
  calendartype?: string;

  /**
   * The name of the user's user-specific
   * Moodle theme.
   */
  theme?: string;

  /**
   * The user's user-specific timezone. A
   * value of `"99"` denotes the site default.
   */
  timezone?: string;

  /**
   * The user's mail format code. A value of 0
   * denotes plain text, and 1 denotes HTML.
   */
  mailformat?: number;

  /**
   * The user's profile description.
   */
  description?: string;

  /**
   * The user's profile description format code.
   *
   * `0` - Moodle
   * `1` - HTML
   * `2` - plain text
   * `4` - Markdown
   */
  descriptionformat?: string;

  /**
   * The user's home city.
   */
  city?: string;

  /**
   * The user's URL.
   */
  url?: string;

  /**
   * The user's home country (provided as a
   * country code, such as `GB` or `AU`).
   */
  country?: string;

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

  /**
   * The user's custom profile fields.
   */
  customfields?: CustomField[];

  /**
   * The user's preferences.
   */
  preferences?: Preference[];
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
