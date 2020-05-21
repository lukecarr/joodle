import { FunctionResponse } from "../../../functions";

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

export interface SiteInfoResponse extends FunctionResponse {
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

  /**
   * Whether the user is allowed to download files
   * (1) or not (0).
   */
  downloadfiles: number;

  /**
   * Whether the user is allowed to upload files (1)
   * or not (0).
   */
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

  /**
   * The URL of the Moodle site's mobile CSS theme.
   */
  mobilecssurl: string;

  /**
   * Advanced Moodle site features (and whether
   * they are currently enabled or not).
   */
  advancedfeatures: AdvancedFeature[];

  /**
   * Whether the user can manage their own files
   * (true) or not (false).
   */
  usercanmanageownfiles: boolean;

  /**
   * User quota in bytes. A value of 0 means the
   * user can ignore the quota.
   */
  userquota: number;

  /**
   * The maximum file size (in bytes) that the
   * user is permitted to upload. A value of -1
   * means the user can upload files of any size.
   */
  usermaxuploadfilesize: number;

  /**
   * The user's default homepage. A value of 0
   * represents the site's homepage, and 1
   * represents the dashboard page.
   */
  userhomepage: number;

  /**
   * The user's private access key used for
   * fetching files from Moodle.
   */
  userprivateaccesskey: string;

  /**
   * The site's course ID.
   */
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
