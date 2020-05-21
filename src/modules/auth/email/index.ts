import Module from "../..";
import { SignUpSettingsResponse } from "./sign-up-settings";
import { SignUpUser, SignUpUserResponse } from "./sign-up-user";

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

  /**
   * Adds a new user to the site (pending user confirmation).
   *
   * @param user The user to sign up.
   */
  public async signUpUser(user: SignUpUser): Promise<SignUpUserResponse> {
    return (await this.get("auth_email_signup_user", {
      ...user,
    })) as SignUpUserResponse;
  }
}
