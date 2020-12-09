import { FunctionResponse } from "../../../functions";
import { Warning } from "../../shared";

export interface UserPictureResponse extends FunctionResponse {
  /**
   * Whether the user picture was updated/deleted successfully (true) or not (false).
   */
  success: boolean;

  /**
   * The URL of the new user profile picture.
   */
  profileimageurl?: string;

  warnings?: Warning[];
}
