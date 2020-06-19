/**
 * @vuepress
 * ---
 * title: Module
 * ---
 */
import qs from "qs";
import { Client } from "./client";
import { FunctionResponse } from "./functions";

/**
 * Attempts to handle a JSON body returned by a call to Moodle's Web Services API.
 * If the body contains an `exception` property, then the response is assumed to
 * be erroneous, and a rejected Promise is returned.
 *
 * @param body A JSON body returned by a Moodle API call.
 * @since 0.1.0
 */
const handleResponse = async (
  response: FunctionResponse
): Promise<FunctionResponse> => {
  if ((response as any).exception) {
    return Promise.reject(response);
  }
  return response;
};

/**
 * Represents a collection of Moodle Web Services API functions.
 *
 * @abstract
 * @since 0.1.0
 */
export default abstract class Module {
  /**
   * The Joodle client that this module belongs to.
   *
   * @since 0.1.0
   */
  protected readonly client: Client;

  /**
   * Initializes the module.
   *
   * @param {Client} [client] The parent client of this module.
   *
   * @since 0.1.0
   */
  public constructor(client: Client) {
    this.client = client;
  }

  /**
   * Performs a GET request to Moodle's Web Services API.
   *
   * @param {string} wsfunction  The name of the Moodle Web Services API function to invoke.
   * @param {any} [searchParams] Any additional GET parameters to include in the request.
   *
   * @protected
   * @since 0.1.0
   */
  protected async get(
    wsfunction: string,
    searchParams?: any
  ): Promise<FunctionResponse> {
    const response = await this.client.got.get("webservice/rest/server.php", {
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
