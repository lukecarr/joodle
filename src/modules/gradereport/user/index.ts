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
 */
export default class UserModule extends Module {
  /**
   * Returns the complete list of grade items for users in a course.
   *
   * @param course The ID of the course to obtain grade items for.
   * @param user The ID of the user to obtain grade items for. Leave
   * undefined to load the grade items for all course members.
   * @param group The ID of the group to obtain grade items for. Leave
   * undefined to load the grade items for all course members.
   */
  public async getGradeItems(
    course: number,
    user?: number,
    group?: number
  ): Promise<GetGradeItemsResponse> {
    return (await this.get("gradereport_user_get_grade_items", {
      courseid: course,
      userid: user === undefined ? 0 : user,
      groupid: group === undefined ? 0 : group,
    })) as GetGradeItemsResponse;
  }
}
