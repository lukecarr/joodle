import got, { Got } from "got";

export interface ClientOptions {
  /**
   * The base URL of the Moodle site to send API requests to.
   */
  baseURL: string;

  /**
   * The token used to authenticate with the Moodle site's Web Services API.
   */
  token: string;
}

/**
 * A client that can send HTTP requests to a Moodle site's Web Services API.
 */
export abstract class Client {
  private baseURL: string;

  private token: string;

  public got: Got;

  /**
   * Initializes the client as well as the client's `got` instance so HTTP
   * requests can be made.
   *
   * @param options The client's configuration options.
   */
  public constructor(options: ClientOptions) {
    this.baseURL = options.baseURL;
    this.token = options.token;

    this.got = got.extend({
      prefixUrl: this.baseURL,
      searchParams: {
        wstoken: this.token,
        moodlewsrestformat: "json",
      },
    });
  }
}
