/**
 * @vuepress
 * ---
 * title: gradereport.user
 * ---
 */
import Module from "../../../module";
import { GetGradeItemsResponse } from "./get-grade-items";

/**
 * Functions for user grades-related actions.
 *
 * @since 0.2.2
 * @extends Module
 */
export default class UserModule extends Module {
  /**
   * Returns the complete list of grade items for users in a course.
   *
   * Leaving the `user` and `group` parameters undefined will load the grade items for all users in the course.
   *
   * @param {number} course  The ID of the course to obtain grade items for.
   * @param {number} [user]  The ID of the user to obtain grade items for.
   * @param {number} [group] The ID of the group to obtain grade items for.
   *
   * @returns {Promise<GetGradeItemsResponse>} The response returned by Moodle.
   *
   * @since 0.2.2
   * @async
   */
  public async getGradeItems(
    course: number,
    user?: number,
    group?: number
  ): Promise<GetGradeItemsResponse> {
    return (await this.client.invoke("gradereport_user_get_grade_items", {
      courseid: course,
      userid: user === undefined ? 0 : user,
      groupid: group === undefined ? 0 : group,
    })) as GetGradeItemsResponse;
  }
}
