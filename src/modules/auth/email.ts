import Module from "..";
import FunctionResponse from "../../functions/response";
import { Warning } from "../shared";

export interface SignUpSettingsResponse extends FunctionResponse {
  /**
   * The fields that a user can provide during sign up to identify their name.
   */
  namefields: string[];

  /**
   * Users signing up to this Moodle site must use a password that meets this policy's requirements.
   */
  passwordpolicy: string;

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
