import { FunctionResponse } from "../../../functions";
import { Warning } from "../../shared";

export interface NewPreference {
  /**
   * The name of the preference to set.
   */
  name: string;

  /**
   * The preference's new value.
   */
  value: string;

  /**
   * The ID of the user to set the preference of.
   */
  userid: number;
}

interface SavedPreference {
  /**
   * The name of the saved preference.
   */
  name: string;

  /**
   * The ID of the user who the preference was set for.
   */
  userid: number;
}

export interface SetUserPreferencesResponse extends FunctionResponse {
  /**
   * The preferences that were saved as a result of this function call.
   */
  saved: SavedPreference[];

  warnings: Warning[];
}
