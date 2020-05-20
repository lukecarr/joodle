import got, { Got } from "got";

export interface ClientOptions {
  baseURL: string;
  token: string;
}

export abstract class Client {
  private baseURL: string;

  private token: string;

  public got: Got;

  public constructor(options: ClientOptions) {
    this.baseURL = options.baseURL;
    this.token = options.token;

    this.got = got.extend({
      prefixUrl: `${this.baseURL}/webservice/rest/server.php`,
      searchParams: {
        wstoken: this.token,
        moodlewsrestformat: "json",
      },
    });
  }
}
