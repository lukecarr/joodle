import { Warning } from "../../shared";
import { FunctionResponse } from "../../../functions";

interface ProfileField {
  /**
   * The field's type.
   */
  type: string;

  /**
   * The field's name.
   */
  name: string;

  /**
   * The field's value.
   */
  value: string;
}

export interface SignUpUser {
  /**
   * The user's username.
   */
  username: string;

  /**
   * The user's password (in plain text).
   */
  password: string;

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
   * The user's home city.
   */
  city?: string;

  /**
   * The user's home country code.
   */
  country?: string;

  /**
   * The Google reCAPTCHA challenge hash.
   */
  recaptchachallengehash?: string;

  /**
   * The Google reCAPTCHA challenge response.
   */
  recaptcharesponse?: string;

  /**
   * The user's custom profile fields.
   */
  customprofilefields?: ProfileField[];

  /**
   * The Moodle site URL to redirect the user to after confirmation.
   */
  redirect?: string;
}

export interface SignUpUserResponse extends FunctionResponse {
  /**
   * Whether the user was created (1) or not (0).
   */
  success: number;

  warnings: Warning[];
}
