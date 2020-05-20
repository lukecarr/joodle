import Module from "../../module";

export default class AuthEmailModule extends Module {
  /**
   * Get the signup required settings and profile fields.
   */
  public async getSignUpSettings(): Promise<unknown> {
    return this.get("auth_email_get_signup_settings");
  }
}
