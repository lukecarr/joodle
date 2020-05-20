import { Client, ClientOptions } from "./client";
import AuthModule from "./modules/auth";

// eslint-disable-next-line import/prefer-default-export
export class Joodle extends Client {
  public auth: AuthModule;

  public constructor(options: ClientOptions) {
    super(options);
    this.auth = new AuthModule(this);
  }
}
