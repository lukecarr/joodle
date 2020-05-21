import Module from "..";
import { FunctionResponse } from "../../functions";
import { Warning } from "../shared";

interface ProfileField {
  /**
   * The field's unique ID.
   */
  id?: number;

  /**
   * The field's shortname.
   */
  shortname?: string;

  /**
   * The field's name.
   */
  name?: string;

  /**
   * The field's data type.
   */
  datatype?: string;

  /**
   * The field's description.
   */
  description?: string;

  /**
   * The field's description format code.
   *
   * `0` - Moodle
   * `1` - HTML
   * `2` - plain text
   * `4` - Markdown
   */
  descriptionformat?: number;

  /**
   * The field's category ID.
   */
  categoryid?: number;

  /**
   * The field's category name.
   */
  categoryname?: string;

  /**
   * The field's sorting order.
   */
  sortorder?: number;

  /**
   * Whether the field is required (1)
   * or not (0).
   */
  required?: number;

  /**
   * Whether the field is locked (1)
   * or not (0).
   */
  locked?: number;

  /**
   * Whether the field is visible (1)
   * or not (0).
   */
  visible?: number;

  /**
   * @todo Add documentation. Moodle's
   * documentation is not helpful.
   */
  forceunique?: number;

  /**
   * @todo Add documentation. Moodle's
   * documentation is not helpful.
   */
  signup?: number;

  /**
   * The field's default data.
   */
  defaultdata?: string;

  /**
   * The field's default data format code.
   * 
   * `0` - Moodle
   * `1` - HTML
   * `2` - plain text
   * `4` - Markdown
   */
  defaultdataformat?: number;

  /**
   * @todo Add documentation. Moodle's
   * documentation is not helpful.
   */
  param1?: string;

  /**
   * @todo Add documentation. Moodle's
   * documentation is not helpful.
   */
  param2?: string;

  /**
   * @todo Add documentation. Moodle's
   * documentation is not helpful.
   */
  param3?: string;

  /**
   * @todo Add documentation. Moodle's
   * documentation is not helpful.
   */
  param4?: string;

  /**
   * @todo Add documentation. Moodle's
   * documentation is not helpful.
   */
  param5?: string;
}

export interface SignUpSettingsResponse extends FunctionResponse {
  /**
   * The fields that a user can provide during sign
   * up to identify their name.
   */
  namefields: string[];

  /**
   * Users signing up to this Moodle site must use
   * a password that meets this policy's requirements.
   */
  passwordpolicy?: string;

  /**
   * The site's policy.
   */
  sitepolicy?: string;

  /**
   * The site's policy handler.
   */
  sitepolicyhandler?: string;

  /**
   * The site's default home city for a user.
   */
  defaultcity?: string;

  /**
   * The site's default home country for a user.
   */
  country?: string;

  /**
   * Required profile fields that the user must
   * provide when signing up.
   */
  profilefields?: ProfileField[];

  /**
   * The site's Google reCAPTCHA public key.
   */
  recaptchapublickey?: string;

  /**
   * The site's Google reCAPTCHA challenge hash.
   */
  recaptchachallengehash?: string;

  /**
   * The site's Google reCAPTCHA challenge image.
   */
  recaptchachallengeimage?: string;

  /**
   * The URL Of the site's Google reCAPTCHA
   * challenge JS.
   */
  recaptchachallengejs?: string;

  warnings?: Warning[];
}

/**
 * Functions relating to Moodle's email-based self-registration.
 *
 * This module's function calls may throw errors if self registration is disabled.
 */
export default class AuthEmailModule extends Module {
  /**
   * Get the sign-up required settings and profile fields.
   */
  public async getSignUpSettings(): Promise<SignUpSettingsResponse> {
    return (await this.get(
      "auth_email_get_signup_settings"
    )) as SignUpSettingsResponse;
  }
}
