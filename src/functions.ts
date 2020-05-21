import { Response } from "got";

/**
 * The response returned by a function call
 * to Moodle's Web Services API.
 */
export interface FunctionResponse {
  /**
   * Returns the raw HTTP response returned
   * from the API call for this function.
   */
  getHttpResponse(): Response;
}
