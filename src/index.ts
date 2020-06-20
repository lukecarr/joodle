/**
 * @vuepress
 * ---
 * title: Joodle
 * ---
 */
import { Client, ClientOptions, HttpOptions } from "./client";
import AuthModule from "./modules/auth";
import CoreModule from "./modules/core";
import GradeReportModule from "./modules/gradereport";

interface Modules {
  /**
   * The module containing functions relating to authentication in Moodle
   * (specifically self-registration).
   *
   * @since 0.1.0
   */
  readonly auth: AuthModule;

  /**
   * The module containing functions relating to core Moodle operations.
   *
   * @since 0.2.0
   */
  readonly core: CoreModule;

  /**
   * The module containing functions for grade-related operations.
   *
   * @since 0.2.2
   */
  readonly gradereport: GradeReportModule;
}

/**
 * The main Joodle client class. Used to make API calls to Moodle's Web Services
 * API.
 *
 * @since 0.1.0
 * @extends Client
 */
// eslint-disable-next-line import/prefer-default-export
export class Joodle extends Client {
  /**
   * The modules that have been implemented by Joodle. Each module serves as a
   * container of numerous Moodle Web Services API functions.
   *
   * @since 1.0.0
   */
  public readonly modules: Modules;

  /**
   * Initializes a new Joodle client instance for making API calls to Moodle's
   * Web Services API.
   *
   * @param {ClientOptions} [options]     The client's configuration options.
   * @param {HttpOptions}  [httpOptions]  HTTP configuration options to pass
   *                                      along to `got`.
   * @since 0.1.0
   */
  public constructor(options?: ClientOptions, httpOptions?: HttpOptions) {
    super(options, httpOptions);

    this.modules = {
      auth: new AuthModule(this),
      core: new CoreModule(this),
      gradereport: new GradeReportModule(this),
    };
  }
}
