/**
 * @vuepress
 * ---
 * title: core.role
 * ---
 */
import Module from "../../../module";
import { FunctionResponse } from "../../../functions";

interface RoleAssignment {
  /**
   * The ID of the role to assign
   * to the user.
   */
  roleid: number;

  /**
   * The ID of the user to assign
   * the role to.
   */
  userid: number;

  /**
   * The context to assign the user
   * role in.
   */
  contextid?: number;

  /**
   * The context level to assign the
   * user role in.
   */
  contextlevel?:
    | "block"
    | "course"
    | "coursecat"
    | "system"
    | "user"
    | "module";

  /**
   * The ID of the instance where the
   * role needs to be assigned.
   */
  instanceid?: number;
}

/**
 * Functions for assigning and unassigning user roles.
 *
 * @since 0.2.1
 * @extends Module
 */
export default class RoleModule extends Module {
  /**
   * Assigns roles to users.
   *
   * @param {RoleAssignment[]} assignments The roles to assign to users.
   *
   * @returns {Promise<FunctionResponse>} The response returned by Moodle.
   *
   * @since 0.2.1
   * @async
   */
  public async assignRoles(
    ...assignments: RoleAssignment[]
  ): Promise<FunctionResponse> {
    return (await this.get("core_role_assign_roles", {
      assignments,
    })) as FunctionResponse;
  }

  /**
   * Unassigns roles from users.
   *
   * @param {RoleAssignment[]} unassignments The roles to unassign from users.
   *
   * @returns {Promise<FunctionResponse>} The response returned by Moodle.
   *
   * @since 0.2.1
   * @async
   */
  public async unassignRoles(
    ...unassignments: RoleAssignment[]
  ): Promise<FunctionResponse> {
    return (await this.get("core_role_unassign_roles", {
      unassignments,
    })) as FunctionResponse;
  }
}
