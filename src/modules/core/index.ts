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
 */
export default class CoreModule extends Module {
  public readonly webservice: WebServiceModule;

  public readonly user: UserModule;

  public readonly role: RoleModule;

  public constructor(client: Client) {
    super(client);
    this.webservice = new WebServiceModule(client);
    this.user = new UserModule(client);
    this.role = new RoleModule(client);
  }
}
