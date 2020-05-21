import got, { Got } from "got";

export interface ClientOptions {
  /**
   * The base URL of the Moodle site to send API requests to. If this value
   * is not provided, then the client falls back to the `JOODLE_BASE_URL`
   * environment variable.
   */
  baseURL?: string;

  /**
   * The token used to authenticate with the Moodle site's Web Services API.
   * If this value is not provided, then the client falls back to the
   * `JOODLE_TOKEN` environment variable.
   */
  token?: string;
}

/**
 * A client that can send HTTP requests to a Moodle site's Web Services API.
 */
export abstract class Client {
  private baseURL?: string;

  private token?: string;

  public got: Got;

  /**
   * Initializes the client as well as the client's `got` instance so HTTP
   * requests can be made.
   *
   * @param options The client's configuration options.
   */
  public constructor(options?: ClientOptions) {
    this.baseURL = (options && options.baseURL) || process.env.JOODLE_BASE_URL;
    this.token = (options && options.token) || process.env.JOODLE_TOKEN;

    if (this.baseURL === undefined) {
      throw new Error("`baseURL` cannot be undefined!");
    } else if (this.token === undefined) {
      throw new Error("`token` cannot be undefined!");
    }

    this.got = got.extend({
      prefixUrl: this.baseURL,
      searchParams: {
        wstoken: this.token,
        moodlewsrestformat: "json",
      },
    });
  }
}
