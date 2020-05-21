import Module from "../..";
import { SignUpSettingsResponse } from "./sign-up-settings";

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
