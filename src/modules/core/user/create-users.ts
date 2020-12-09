import { FunctionResponse } from "../../../functions";
import { CustomField, Preference } from "../../shared";

interface User {
  /**
   * The user's username.
   */
  username: string;

  /**
   * The user's authentication plugin, such as `manual` or `ldap`.
   */
  auth?: string;

  /**
   * The user's first name(s).
   */
  firstname: string;

  /**
   * The user's last/family name.
   */
  lastname: string;

  /**
   * The user's email address. This should be unique (not in use by an existing user).
   */
  email: string;

  /**
   * Email display.
   *
   * @todo Better documentation. This explanation is pulled from Moodle's documentation.
   */
  maildisplay?: number;

  /**
   * The user's home city.
   */
  city?: string;

  /**
   * The user's home country code.
   */
  country?: string;

  /**
   * The user's user-specific timezone. A value of `"99"` denotes the site default.
   */
  timezone?: string;

  /**
   * The user's profile description (without HTML).
   */
  description?: string;

  /**
   * The user's first name (phonetically spelt).
   */
  firstnamephonetic?: string;

  /**
   * The user's last name (phonetically spelt).
   */
  lastnamephonetic?: string;

  /**
   * The user's middle name.
   */
  middlename?: string;

  /**
   * The user's alternate name.
   */
  alernatename?: string;

  /**
   * The user's interests, separated by commas.
   */
  interests?: string;

  /**
   * The user's URL.
   */
  url?: string;

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
   * An arbitrary ID number for the user (sometimes from their institution).
   */
  idnumber?: string;

  /**
   * The user's institution.
   */
  institution?: string;

  /**
   * The user's organizational department.
   */
  department?: string;

  /**
   * The user's first phone number.
   */
  phone1?: string;

  /**
   * The user's second phone number.
   */
  phone2?: string;

  /**
   * The user's postal address.
   */
  address?: string;

  /**
   * The user's user-specific language, such as `en` or `en_ar` (pirate language).
   */
  lang?: string;

  /**
   * The user's user-specific calendar type, such as `gregorian`.
   */
  calendartype?: string;

  /**
   * The name of the user's user-specific Moodle theme.
   */
  theme?: string;

  /**
   * The user's mail format code. A value of 0 denotes plain text, and 1 denotes HTML.
   */
  mailformat?: number;

  /**
   * The user's custom profile fields.
   */
  customfields?: CustomField[];

  /**
   * The user's preferences.
   */
  preferences?: Preference[];
}

export interface UserProvidedPassword extends User {
  /**
   * The user's password (in plain text).
   */
  password: string;
}

export interface UserGeneratedPassword extends User {
  /**
   * Whether the user's password should be generated and mailed to them (true) or not (false).
   */
  createpassword: true;
}

interface CreatedUser {
  /**
   * The unique ID of the created user.
   */
  id: number;

  /**
   * The username of the created user.
   */
  username: string;
}

export interface CreateUsersResponse extends FunctionResponse {
  /**
   * The array of users created as a result of this function call.
   */
  users: CreatedUser[];
}
