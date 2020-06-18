import { FunctionResponse } from "../../../functions";
import { Warning } from "../../shared";

export interface Grade {
  /**
   * The ID of the grade.
   */
  id: number;

  /**
   * The name of the grade.
   */
  itemname: string;

  /**
   * The type of grade.
   */
  itemtype: string;

  /**
   * The grade's module.
   */
  itemmodule: string;

  /**
   * The ID of the grade's category.
   */
  categoryid: number;

  /**
   * The ID of the grade outcome.
   */
  outcomeid: number;

  /**
   * The ID of the grade scale.
   */
  scaleid: number;

  /**
   * Whether the grade is locked
   * for the user (true) or not (false).
   */
  locked?: boolean;

  /**
   * The ID of the course module.
   */
  cmid?: number;

  /**
   * The raw weight of the grade.
   */
  weightraw?: number;

  /**
   * The formatted weight of the grade.
   */
  weightformatted?: string;

  /**
   * The status of the grade.
   */
  status?: string;

  /**
   * The raw value of the grade.
   */
  graderaw?: number;

  /**
   * The UNIX timestamp of the time
   * when the grade was submitted.
   */
  gradedatesubmitted?: number;

  /**
   * The UNIX timestamp of the time
   * when the grade was graded.
   */
  gradedategraded?: number;

  /**
   * Whether the grade is hidden by
   * date (true) or not (false).
   */
  gradehiddenbydate?: boolean;

  /**
   * Whether the grade needs an
   * update (true) or not (false).
   */
  gradeneedsupdate?: boolean;

  /**
   * Whether the grade is hidden
   * (true) or visible (false).
   */
  gradeishidden?: boolean;

  /**
   * Whether the grade is locked
   * (true) or unlocked (false).
   */
  gradeislocked?: boolean;

  /**
   * Whether the grade is overriden
   * (true) or not (false).
   */
  gradeisoverriden?: boolean;

  /**
   * The formatted string of the
   * grade.
   */
  gradeformatted?: string;

  /**
   * The minimum value for the
   * grade.
   */
  grademin?: number;

  /**
   * The maximum value for the
   * grade.
   */
  grademax?: number;

  /**
   * The formatted string of the
   * grade's range.
   */
  rangeformatted?: string;

  /**
   * The formatted string of the
   * grade as a percentage.
   */
  percentageformatted?: string;

  /**
   * The formatted string of the
   * grade as a letter.
   */
  lettergradeformatted?: string;

  /**
   * The rank of this grade within
   * the course.
   */
  rank?: number;

  /**
   * The number of users in this
   * course.
   */
  numusers?: number;

  /**
   * The formatted string of the
   * average grade in this course.
   */
  averageformatted?: string;

  /**
   * Any feedback attached to this
   * grade.
   */
  feedback?: string;

  /**
   * The grade's feedback format code.
   *
   *
   * `0` - Moodle
   * `1` - HTML
   * `2` - plain text
   * `4` - Markdown
   */
  feedbackformat?: number;
}

export interface UserGrades {
  /**
   * The ID of the course that the
   * grades belong to.
   */
  courseid: number;

  /**
   * The ID of the user that the
   * grades belong to.
   */
  userid: number;

  /**
   * The full name of the user referenced
   * by userid.
   */
  userfullname: string;

  /**
   * The table's max depth (needed for
   * printing it).
   */
  maxdepth: number;

  /**
   * The user's grades.
   */
  gradeitems: Grade[];
}

export interface GetGradeItemsResponse extends FunctionResponse {
  /**
   * The user grades obtained from
   * the request.
   */
  usergrades: UserGrades[];

  warnings: Warning[];
}
