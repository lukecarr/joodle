import { Client, ClientOptions } from "./client";
import AuthModule from "./modules/auth";

export default class Joodle extends Client {
  public auth: AuthModule;

  public constructor(options: ClientOptions) {
    super(options);
    this.auth = new AuthModule(this);
  }
}
