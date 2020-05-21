import Module from "..";

interface WebServiceFunction {
  /**
   * The name of the Web Services API function.
   */
  name: string;

  /**
   * The function's version string.
   */
  version: string;
}

interface AdvancedFeature {
  /**
   * The name of the advanced site feature.
   */
  name: string;

  /**
   * Whether the feature is enabled (1) or disabled (0).
   */
  value: 1 | 0;
}

export interface SiteInfoResponse {
  /**
   * The Moodle site's display name.
   */
  sitename: string;

  /**
   * The username of the web service user making the
   * API request.
   */
  username: string;

  /**
   * The first name of the web service user making
   * the API request.
   */
  firstname: string;

  /**
   * The last name of the web service user making
   * the API request.
   */
  lastname: string;

  /**
   * The full name of the web service user making
   * the API request.
   */
  fullname: string;

  /**
   * The preferred language of the web service user
   * making the API request.
   */
  lang: string;

  /**
   * The unique identifier of the web service user
   * making the API request.
   */
  userid: number;

  /**
   * The Moodle site's URL.
   */
  siteurl: string;

  /**
   * The avatar/user picture URL of the web service
   * user making the API request.
   */
  userpictureurl: string;

  /**
   * The web service functions that the web service
   * user making the API request is authorized to
   * call.
   */
  functions: WebServiceFunction[];

  downloadfiles: number;

  uploadfiles: number;

  /**
   * The Moodle release currently installed on the
   * site.
   */
  release: string;

  /**
   * The Moodle version currently installed on the
   * site.
   */
  version: string;

  mobilecssurl: string;

  /**
   * Advanced Moodle site features (and whether
   * they are currently enabled or not).
   */
  advancedfeatures: AdvancedFeature[];

  usercanmanageownfiles: boolean;

  userquota: number;

  usermaxuploadfilesize: number;

  userhomepage: number;

  userprivateaccesskey: string;

  siteid: number;

  /**
   * The global calendar type of the Moodle
   * site.
   */
  sitecalendartype: string;

  /**
   * The personal calendar type of the web
   * service user making the API request.
   */
  usercalendartype: string;

  /**
   * Whether the web service user making the
   * API request is a site admin (true) or
   * not (false).
   */
  userissiteadmin: boolean;

  /**
   * The name of the Moodle theme currently
   * installed on the site.
   */
  theme: string;
}

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
