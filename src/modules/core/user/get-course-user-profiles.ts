import { FunctionResponse } from "../../../functions";
import { User } from "../../shared";

export interface CourseUser {
  /**
   * The ID of the user.
   */
  userid: number;

  /**
   * The ID of the course.
   */
  courseid: number;
}

interface UserGroup {
  /**
   * The group's unique ID.
   */
  id: number;

  /**
   * The group's name.
   */
  name: string;

  /**
   * The group's description.
   */
  description: string;

  /**
   * The group's description format code.
   *
   * `0` - Moodle
   * `1` - HTML
   * `2` - Plain text
   * `4` - Markdown
   */
  descriptionformat: number;
}

interface UserRole {
  /**
   * The role's unique ID.
   */
  roleid: number;

  /**
   * The role's name.
   */
  name: string;

  /**
   * The role's shortname.
   */
  shortname: string;

  /**
   * The role's sorting order.
   */
  sortorder: number;
}

interface EnrolledCourse {
  /**
   * The course's unique ID.
   */
  id: number;

  /**
   * The course's full name.
   */
  fullname: string;

  /**
   * The course's shortname.
   */
  shortname: string;
}

interface CourseUserProfile extends User {
  /**
   * The user's groups.
   */
  groups?: UserGroup[];

  /**
   * The user's roles.
   */
  roles?: UserRole[];

  /**
   * The courses that the user is enrolled in.
   */
  enrolledcourses?: EnrolledCourse[];
}

export interface GetCourseUserProfilesResponse extends FunctionResponse {
  profiles: CourseUserProfile[];
}
