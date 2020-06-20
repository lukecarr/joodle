/**
 * @vuepress
 * ---
 * title: core.webservice
 * ---
 */
import Module from "../../../module";
import { SiteInfoResponse } from "./get-site-info";

/**
 * Functions relating to system actions.
 *
 * @since 0.2.0
 * @extends Module
 */
export default class WebServiceModule extends Module {
  /**
   * Returns information about the Moodle site and the Web Services API.
   * This function's response also contains information relating to the
   * web service user, such as capabilities and authorized API actions.
   *
   * @returns {Promise<SiteInfoResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async getSiteInfo(): Promise<SiteInfoResponse> {
    return (await this.client.invoke(
      "core_webservice_get_site_info"
    )) as SiteInfoResponse;
  }
}
