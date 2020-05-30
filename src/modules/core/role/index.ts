import Module from "../..";
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
 */
export default class RoleModule extends Module {
  /**
   * Assigns roles to users.
   *
   * @param assignments The roles to assign to users.
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
   * @param unassignments The roles to unassign from users.
   */
  public async unassignRoles(
    ...unassignments: RoleAssignment[]
  ): Promise<FunctionResponse> {
    return (await this.get("core_role_unassign_roles", {
      unassignments,
    })) as FunctionResponse;
  }
}
