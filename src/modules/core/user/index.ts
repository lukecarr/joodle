import Module from "../..";
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
import { SearchCriteria, GetUsersResponse } from "./get-users";
import { GetUsersByFieldResponse } from "./get-users-by-field";

/**
 * Functions for user-related actions.
 */
export default class UserModule extends Module {
  /**
   * Agrees to the Moodle site policy for the current
   * web service user.
   */
  public async agreeSitePolicy(): Promise<SitePolicyAgreementResponse> {
    return (await this.get(
      "core_user_agree_site_policy"
    )) as SitePolicyAgreementResponse;
  }

  /**
   * Creates users and adds them to the Moodle site.
   *
   * @param users The users to create.
   */
  public async createUsers(
    ...users: (UserProvidedPassword | UserGeneratedPassword)[]
  ): Promise<CreateUsersResponse> {
    const response = (await this.get("core_user_create_users", {
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
   * @param users The IDs of the users to delete.
   */
  public async deleteUsers(...users: number[]): Promise<FunctionResponse> {
    return (await this.get("core_user_delete_users", {
      userids: users,
    })) as FunctionResponse;
  }

  /**
   * Gets the course profiles for users.
   * @param users The users (comprising of user ID
   * and course ID) to lookup.
   */
  public async getCourseUserProfiles(
    ...users: CourseUser[]
  ): Promise<GetCourseUserProfilesResponse> {
    const response = (await this.get("core_user_get_course_user_profiles", {
      userlist: users,
    })) as FunctionResponse;

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
   * Searches for users on the Moodle site that match
   * the provided crtieria.
   */
  public async getUsers(
    ...criteria: SearchCriteria[]
  ): Promise<GetUsersResponse> {
    return (await this.get("core_user_get_users", {
      criteria,
    })) as GetUsersResponse;
  }

  /**
   * Searches for users on the Moodle site that match
   * a specific field value.
   *
   * @param field  The name of the field to search.
   * @param values The value to search users' fields for.
   */
  public async getUsersByField(
    field: "id" | "idnumber" | "username" | "email",
    ...values: (string | number)[]
  ): Promise<GetUsersByFieldResponse> {
    const response = (await this.get("core_user_get_users_by_field", {
      field,
      values,
    })) as FunctionResponse;

    const users: GetUsersByFieldResponse = {
      users: [],
      getHttpResponse: response.getHttpResponse,
    };

    users.users = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return users;
  }
}
