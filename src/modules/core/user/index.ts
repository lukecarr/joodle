/**
 * @vuepress
 * ---
 * title: core.user
 * ---
 */
import Module from "../../../module";
import { FunctionResponse } from "../../../functions";
import { SitePolicyAgreementResponse } from "./agree-site-policy";
import {
  UserProvidedPassword,
  UserGeneratedPassword,
  CreateUsersResponse,
} from "./create-users";
import {
  CourseUser,
  GetCourseUserProfilesResponse,
} from "./get-course-user-profiles";
import { GetPrivateFilesInfoResponse } from "./get-private-files-info";
import { GetUserPreferencesResponse } from "./get-user-preferences";
import {
  NewPreference,
  SetUserPreferencesResponse,
} from "./set-user-preferences";
import { SearchCriteria, GetUsersResponse } from "./get-users";
import { GetUsersByFieldResponse } from "./get-users-by-field";
import { UserPictureResponse } from "./user-picture";

/**
 * Functions for user-related actions.
 *
 * @since 0.2.0
 * @extends Module
 */
export default class UserModule extends Module {
  /**
   * Agrees to the Moodle site policy for the current web service user.
   *
   * @returns {Promise<SitePolicyAgreementResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async agreeSitePolicy(): Promise<SitePolicyAgreementResponse> {
    return (await this.client.invoke(
      "core_user_agree_site_policy"
    )) as SitePolicyAgreementResponse;
  }

  /**
   * Creates users and adds them to the Moodle site.
   *
   * @param users The users to create.
   *
   * @returns {Promise<CreateUsersResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async createUsers(
    ...users: (UserProvidedPassword | UserGeneratedPassword)[]
  ): Promise<CreateUsersResponse> {
    const response = (await this.client.invoke("core_user_create_users", {
      users,
    })) as FunctionResponse;

    const response1: CreateUsersResponse = {
      users: [],
      getHttpResponse: response.getHttpResponse,
    };

    response1.users = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return response1;
  }

  /**
   * Deletes users from the Moodle site.
   *
   * @param {number[]} users The IDs of the users to delete.
   *
   * @returns {Promise<FunctionResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async deleteUsers(...users: number[]): Promise<FunctionResponse> {
    return (await this.client.invoke("core_user_delete_users", {
      userids: users,
    })) as FunctionResponse;
  }

  /**
   * Gets the course profiles for users.
   *
   * @param {CourseUser[]} users The users (comprising of user ID and course ID) to lookup.
   *
   * @returns {Promise<GetCourseUserProfilesResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async getCourseUserProfiles(
    ...users: CourseUser[]
  ): Promise<GetCourseUserProfilesResponse> {
    const response = (await this.client.invoke(
      "core_user_get_course_user_profiles",
      {
        userlist: users,
      }
    )) as FunctionResponse;

    const profiles: GetCourseUserProfilesResponse = {
      profiles: [],
      getHttpResponse: response.getHttpResponse,
    };

    profiles.profiles = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return profiles;
  }

  /**
   * Returns general information about files in a user's private files area.
   *
   * @param {number} [user] The ID of the user to lookup file info on. If none is provided, the ID of the web service
   *                        user is used.
   *
   * @returns {Promise<GetPrivateFilesInfoResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async getPrivateFilesInfo(
    user?: number
  ): Promise<GetPrivateFilesInfoResponse> {
    return (await this.client.invoke("core_user_get_private_files_info", {
      userid: user === undefined ? 0 : user,
    })) as GetPrivateFilesInfoResponse;
  }

  /**
   * Returns user preferences for a Moodle user.
   *
   * @param {string} [name] The name of the preference to lookup. If none is provided, all preferences are returned.
   * @param {number} [user] The ID of the user to lookup preferences for. If none is provided, the ID of the web service
   *                        user is used.
   *
   * @returns {Promise<GetUserPreferencesResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async getUserPreferences(
    name?: string,
    user?: number
  ): Promise<GetUserPreferencesResponse> {
    return (await this.client.invoke("core_user_get_user_preferences", {
      name,
      userid: user === undefined ? 0 : user,
    })) as GetUserPreferencesResponse;
  }

  /**
   * Sets user preferences for Moodle users.
   *
   * @param {NewPreference[]} preferences The preferences to set.
   *
   * @returns {Promise<SetUserPreferencesResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async setUserPreferences(
    ...preferences: NewPreference[]
  ): Promise<SetUserPreferencesResponse> {
    return (await this.client.invoke("core_user_set_user_preferences", {
      preferences,
    })) as SetUserPreferencesResponse;
  }

  /**
   * Searches for users on the Moodle site that match the provided criteria.
   *
   * @param {SearchCriteria[]} criteria The search criteria used to search for
   *                                    users.
   *
   * @returns {Promise<GetUsersResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async getUsers(
    ...criteria: SearchCriteria[]
  ): Promise<GetUsersResponse> {
    return (await this.client.invoke("core_user_get_users", {
      criteria,
    })) as GetUsersResponse;
  }

  /**
   * Searches for users on the Moodle site that match a specific field value.
   *
   * @param {"id" | "idnumber" | "username" | "email"} field  The name of the
   *                                                          field to search for.
   * @param                                            values The value to search
   *                                                          users' fields for.
   *
   * @returns {Promise<GetUsersByFieldResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async getUsersByField(
    field: "id" | "idnumber" | "username" | "email",
    ...values: (string | number)[]
  ): Promise<GetUsersByFieldResponse> {
    const response = (await this.client.invoke("core_user_get_users_by_field", {
      field,
      values,
    })) as GetUsersByFieldResponse;

    const users: GetUsersByFieldResponse = {
      users: [],
      getHttpResponse: response.getHttpResponse,
    };

    users.users = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return users;
  }

  /**
   * Updates a user's profile picture.
   *
   * @param {number} draftItemId The ID of the draft file to use as the picture.
   * @param {number} [user]      The ID of the user to update the picture of. If
   *                             none is provided, the ID of the web service user
   *                             is used.
   *
   * @returns {Promise<UserPictureResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async updateUserPicture(
    draftItemId: number,
    user?: number
  ): Promise<UserPictureResponse> {
    return (await this.client.invoke("core_user_update_picture", {
      draftitemid: draftItemId,
      userid: user === undefined ? 0 : user,
    })) as UserPictureResponse;
  }

  /**
   * Deletes a user's profile picture.
   *
   * @param {number} [user] The ID of the user to delete the picture of. If none
   *                        is provided, the ID of the web service user is used.
   *
   * @returns {Promise<UserPictureResponse>} The response returned by Moodle.
   *
   * @since 0.2.0
   * @async
   */
  public async deleteUserPicture(user?: number): Promise<UserPictureResponse> {
    return (await this.client.invoke("core_user_update_picture", {
      draftitemid: 0,
      delete: 1,
      userid: user === undefined ? 0 : user,
    })) as UserPictureResponse;
  }
}
