import Module from "..";
import WebServiceModule from "./webservice";
import UserModule from "./user";
import { Client } from "../../client";

/**
 * Functions relating to core Moodle operations.
 */
export default class CoreModule extends Module {
  public webservice: WebServiceModule;

  public user: UserModule;

  public constructor(client: Client) {
    super(client);
    this.webservice = new WebServiceModule(client);
    this.user = new UserModule(client);
  }
}
