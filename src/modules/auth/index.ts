import Module from "../../module";
import AuthEmailModule from "./email";
import { Client } from "../../client";

export default class AuthModule extends Module {
  public email: AuthEmailModule;

  public constructor(client: Client) {
    super(client);
    this.email = new AuthEmailModule(client);
  }
}
