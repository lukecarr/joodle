/**
 * @vuepress
 * ---
 * title: core.webservice
 * ---
 */
import Module from "../..";
import { SiteInfoResponse } from "./get-site-info";

/**
 * Functions relating to system actions.
 */
export default class WebServiceModule extends Module {
  /**
   * Returns information about the Moodle site and the Web Services API.
   * This function's response also contains information relating to the
   * web service user, such as capabilities and authorized API actions.
   */
  public async getSiteInfo(): Promise<SiteInfoResponse> {
    return (await this.get(
      "core_webservice_get_site_info"
    )) as SiteInfoResponse;
  }
}
