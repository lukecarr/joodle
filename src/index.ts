import { Client, ClientOptions, HttpOptions } from "./client";
import AuthModule from "./modules/auth";
import CoreModule from "./modules/core";

/**
 * The main Joodle client class. Used to make API calls to Moodle's Web Services
 * API.
 */
// eslint-disable-next-line import/prefer-default-export
export class Joodle extends Client {
  public auth: AuthModule;

  public core: CoreModule;

  /**
   * Initializes a new Joodle client instance for making API calls to Moodle's
   * Web Services API.
   *
   * @param options     The client's configuration options.
   * @param httpOptions HTTP configuration options to pass along to `got`.
   */
  public constructor(options?: ClientOptions, httpOptions?: HttpOptions) {
    super(options, httpOptions);

    this.auth = new AuthModule(this);
    this.core = new CoreModule(this);
  }
}
