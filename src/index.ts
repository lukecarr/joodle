import { Client, ClientOptions } from "./client";
import AuthModule from "./modules/auth";

/**
 * The main Joodle client class. Used to make API calls to Moodle's Web Services
 * API.
 */
// eslint-disable-next-line import/prefer-default-export
export class Joodle extends Client {
  public auth: AuthModule;

  /**
   * Initializes a new Joodle client instance for making API calls to Moodle's
   * Web Services API.
   * @param options The client's configuration options.
   */
  public constructor(options: ClientOptions) {
    super(options);
    this.auth = new AuthModule(this);
  }
}