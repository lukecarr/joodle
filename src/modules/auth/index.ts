/**
 * @vuepress
 * ---
 * title: auth
 * ---
 */
import Module from "../../module";
import AuthEmailModule from "./email";
import { Client } from "../../client";

/**
 * Functions relating to authentication in Moodle (specifically self-registration).
 *
 * @since 0.1.0
 * @extends Module
 */
export default class AuthModule extends Module {
  /**
   * The module containing functions relating to Moodle's email-based self-registration.
   *
   * @since 0.1.0
   */
  public readonly email: AuthEmailModule;

  /**
   * Initializes the module.
   *
   * @param {Client} client The parent client of this module.
   *
   * @since 0.1.0
   */
  public constructor(client: Client) {
    super(client);
    this.email = new AuthEmailModule(client);
  }
}
