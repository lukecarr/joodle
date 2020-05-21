import { FunctionResponse } from "../../../functions";
import { Warning } from "../../shared";

export interface SitePolicyAgreementResponse extends FunctionResponse {
  /**
   * Whether the agreement was processed
   * successfuly (true) or not (false).
   */
  status: boolean;

  warnings?: Warning[];
}
