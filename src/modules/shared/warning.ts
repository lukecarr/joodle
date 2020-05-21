export default interface Warning {
  /**
   * @todo Add documentation. Moodle's
   * documentation does not provide an
   * explanation.
   */
  item?: string;

  /**
   * Faulty key name.
   *
   * @todo Better documentation. This
   * explanation is pulled from Moodle's
   * documentation.
   */
  itemid?: number;

  /**
   * The warning code. This code can be
   * used by the client app to implement
   * specific behavior.
   */
  warningcode: string;

  /**
   * The warning message (untranslated,
   * in English).
   */
  message: string;
}
