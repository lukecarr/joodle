/**
 * @vuepress
 * ---
 * title: Module
 * ---
 */
import { Client } from "./client";

/**
 * Represents a collection of Moodle Web Services API functions.
 *
 * @abstract
 * @since 0.1.0
 */
export default abstract class Module {
  /**
   * The Joodle client that this module belongs to.
   *
   * @since 0.1.0
   */
  protected readonly client: Client;

  /**
   * Initializes the module.
   *
   * @param {Client} [client] The parent client of this module.
   *
   * @since 0.1.0
   */
  public constructor(client: Client) {
    this.client = client;
  }
}
