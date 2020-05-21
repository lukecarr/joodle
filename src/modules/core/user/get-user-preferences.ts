import { FunctionResponse } from "../../../functions";
import { Preference, Warning } from "../../shared";

export interface GetUserPreferencesResponse extends FunctionResponse {
  /**
   * The user's preferences.
   */
  preferences: Preference[];

  warnings?: Warning[];
}
