import { Client } from "../client";
import FunctionResponse from "../functions/response";

/**
 * Attempts to handle a JSON body returned by a call to Moodle's Web Services API.
 * If the body contains an `exception` property, then the response is assumed to
 * be erroneous, and a rejected Promise is returned.
 *
 * @param body A JSON body returned by a Moodle API call.
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
 */
export default abstract class Module {
  protected client: Client;

  public constructor(client: Client) {
    this.client = client;
  }

  /**
   * Performs a GET request to Moodle's Web Services API.
   *
   * @param wsfunction The name of the Moodle Web Services API function to invoke.
   * @param searchParams Any additional GET parameters to include in the request.
   */
  protected async get(
    wsfunction: string,
    searchParams?: any
  ): Promise<FunctionResponse> {
    const response = await this.client.got.get("webservice/rest/server.php", {
      searchParams: {
        wsfunction,
        ...searchParams,
      },
      responseType: "json",
    });

    return handleResponse({
      getHttpResponse: () => response,
      ...(response.body as any),
    });
  }
}
