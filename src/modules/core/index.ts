/**
 * @vuepress
 * ---
 * title: core
 * ---
 */
import Module from "../../module";
import WebServiceModule from "./webservice";
import UserModule from "./user";
import RoleModule from "./role";
import { Client } from "../../client";

/**
 * Functions relating to core Moodle operations.
 *
 * @since 0.2.0
 * @extends Module
 */
export default class CoreModule extends Module {
  /**
   * The module containing functions relating to system actions.
   *
   * @since 0.2.0
   */
  public readonly webservice: WebServiceModule;

  /**
   * The module containing functions for user-related actions.
   *
   * @since 0.2.0
   */
  public readonly user: UserModule;

  /**
   * The module containing functions for assigning and unassigning user roles.
   *
   * @since 0.2.1
   */
  public readonly role: RoleModule;

  /**
   * Initializes the module.
   *
   * @param client The parent client of this module.
   *
   * @since 0.2.0
   */
  public constructor(client: Client) {
    super(client);
    this.webservice = new WebServiceModule(client);
    this.user = new UserModule(client);
    this.role = new RoleModule(client);
  }
}
