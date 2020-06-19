/**
 * @vuepress
 * ---
 * title: gradereport
 * ---
 */
import Module from "../../module";
import UserModule from "./user";
import { Client } from "../../client";

/**
 * Functions for grade-related operations.
 *
 * @since 0.2.2
 * @extends Module
 */
export default class CoreModule extends Module {
  /**
   * The module containing functions for user grades-related actions.
   *
   * @since 0.2.2
   */
  public readonly user: UserModule;

  /**
   * Initializes the module.
   *
   * @param {Client} client The parent client of this module.
   *
   * @since 0.2.2
   */
  public constructor(client: Client) {
    super(client);
    this.user = new UserModule(client);
  }
}
