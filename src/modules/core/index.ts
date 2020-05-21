import Module from "..";
import WebServiceModule from "./webservice";
import { Client } from "../../client";

/**
 * Functions relating to core Moodle operations.
 */
export default class CoreModule extends Module {
  public webservice: WebServiceModule;

  public constructor(client: Client) {
    super(client);
    this.webservice = new WebServiceModule(client);
  }
}
