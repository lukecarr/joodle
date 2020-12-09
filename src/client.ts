/**
 * @vuepress
 * ---
 * title: Client
 * ---
 */
import qs from "qs";
import got, { Got } from "got";
import CacheableRequest from "cacheable-request";
import { FunctionResponse } from "./functions";

/**
 * Attempts to handle a JSON body returned by a call to Moodle's Web Services API. If the body contains an `exception`
 * property, then the response is assumed to be erroneous, and a rejected Promise is returned.
 *
 * @param response The response returned by a Moodle API call.
 * @since 1.0.0
 */
const handleResponse = async (
  response: FunctionResponse
): Promise<FunctionResponse> => {
  if ((response as any).exception) {
    return Promise.reject(response);
  }
  return response;
};

export interface ClientOptions {
  /**
   * The base URL of the Moodle site to send API requests to. If this value is not provided, then the client falls back
   * to the `JOODLE_BASE_URL` environment variable.
   */
  baseURL?: string;

  /**
   * The token used to authenticate with the Moodle site's Web Services API. If this value is not provided, then the
   * client falls back to the `JOODLE_TOKEN` environment variable.
   */
  token?: string;
}

export interface HttpOptions {
  /**
   * The duration in milliseconds that the client should wait for a response before aborting the request.
   *
   * By default, there is no response timeout duration.
   */
  timeout?: number;

  /**
   * How many retries should the client attempt to make on failure.
   *
   * By default, the client will attempt 2 retries if the first request fails.
   */
  retries?: number;

  /**
   * Whether the client should reject invalid SSL certificates (true) or not (false).
   *
   * By default, the client will reject invalid SSL certificates. This option has security implications if set to true,
   * and we only recommend you do so when connecting to a local Moodle instance.
   */
  rejectInvalidSSL?: boolean;

  /**
   * An object that implements the Map API (such as a `new Map()` or a Keyv instance) can be supplied here to cache
   * requests. This caching behavior is compliant with RFC 7234, and uses the `If-None-Match`/`If-Modified-Since`
   * HTTP headers to revalidate stale cache entries.
   */
  cache?: string | false | CacheableRequest.StorageAdapter;
}

/**
 * A client that can send HTTP requests to a Moodle site's Web Services API.
 *
 * @since 0.1.0
 * @abstract
 */
export abstract class Client {
  /**
   * The base URL of the Moodle site to send requests to.
   *
   * @since 0.1.0
   */
  private readonly baseURL?: string;

  /**
   * The token used to authenticate with Moodle's Web Services API.
   *
   * @since 0.1.0
   */
  private readonly token?: string;

  /**
   * The underlying got instance used for HTTP requests.
   *
   * @since 0.1.0
   */
  public got: Got;

  /**
   * Initializes the client as well as the client's `got` instance so HTTP requests can be made.
   *
   * @param {ClientOptions} [options]     The client's configuration options.
   * @param {HttpOptions}   [httpOptions] HTTP configuration options to pass along to `got`.
   * @since 0.1.0
   */
  protected constructor(options?: ClientOptions, httpOptions?: HttpOptions) {
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
      // HTTP Options
      timeout: (httpOptions && httpOptions.timeout) || undefined,
      retry: (httpOptions && httpOptions.retries) || 2,
      https: {
        rejectUnauthorized:
          httpOptions && httpOptions.rejectInvalidSSL !== undefined
            ? httpOptions.rejectInvalidSSL
            : true,
      },
      cache:
        httpOptions && httpOptions.cache !== undefined
          ? httpOptions.cache
          : undefined,
    });
  }

  /**
   * Invokes a Moodle Web Services API function.
   *
   * @param {string} wsfunction  The name of the Moodle Web Services API function to invoke.
   * @param {any} [searchParams] Any additional GET parameters to include in the request.
   *
   * @since 1.0.0
   */
  public async invoke(
    wsfunction: string,
    searchParams?: any
  ): Promise<FunctionResponse> {
    const response = await this.got.get("webservice/rest/server.php", {
      searchParams: qs.stringify({
        wsfunction,
        ...searchParams,
      }),
      responseType: "json",
    });

    return handleResponse({
      getHttpResponse: () => response,
      ...(response.body as any),
    });
  }
}
