import { FunctionResponse } from "../../../functions";
import { Warning } from "../../shared";

export interface GetPrivateFilesInfoResponse extends FunctionResponse {
  /**
   * The number of files the user has in their private files area.
   */
  filecount: number;

  /**
   * The number of folders the user has in their private files area.
   */
  foldercount: number;

  /**
   * The total size of the files in the user's private files area (in bytes).
   */
  filesize: number;

  /**
   * The total size of the files in the user's private files area excluding references.
   */
  filesizewithoutreferences: number;

  warnings?: Warning[];
}
