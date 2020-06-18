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
 */
export default class CoreModule extends Module {
  public readonly user: UserModule;

  public constructor(client: Client) {
    super(client);
    this.user = new UserModule(client);
  }
}
