/**
 * @vuepress
 * ---
 * title: auth.email
 * ---
 */
import Module from "../../../module";
import { SignUpSettingsResponse } from "./sign-up-settings";
import { SignUpUser, SignUpUserResponse } from "./sign-up-user";

/**
 * Functions relating to Moodle's email-based self-registration.
 *
 * This module's function calls may throw errors if self registration is disabled.
 *
 * @since 0.1.0
 * @extends Module
 */
export default class AuthEmailModule extends Module {
  /**
   * Get the sign-up required settings and profile fields.
   *
   * @returns {Promise<SignUpSettingsResponse>} The response returned by Moodle.
   *
   * @since 0.1.0
   * @async
   */
  public async getSignUpSettings(): Promise<SignUpSettingsResponse> {
    return (await this.get(
      "auth_email_get_signup_settings"
    )) as SignUpSettingsResponse;
  }

  /**
   * Adds a new user to the site (pending user confirmation).
   *
   * @param {SignUpUser} user The user to sign up.
   *
   * @returns {Promise<SignUpUserResponse>} The response returned by Moodle.
   *
   * @since 0.1.0
   * @async
   */
  public async signUpUser(user: SignUpUser): Promise<SignUpUserResponse> {
    return (await this.get("auth_email_signup_user", {
      ...user,
    })) as SignUpUserResponse;
  }
}
