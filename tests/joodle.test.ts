import nock from "nock";
import { Joodle } from "../src";

describe("The Joodle client class", () => {
  const baseURL = "https://moodle.example.com/";
  const token = "abc123";
  let joodle: Joodle;

  beforeAll(() => {
    joodle = new Joodle({
      baseURL,
      token,
    });

    nock(baseURL)
      .get(`/webservice/rest/server.php?wsfunction=auth_email_get_signup_settings&wstoken=${token}&moodlewsrestformat=json`)
      .reply(200, {
        namefields: [
          "firstname",
          "lastname",
        ],
        passwordpolicy: "Password must exist!",
        warnings: [],
      });

    nock(baseURL)
      .get(`/webservice/rest/server.php?wsfunction=core_webservice_get_site_info&wstoken=${token}&moodlewsrestformat=json`)
      .reply(200, {
        errorcode: "invalidtoken",
        exception: "moodle_exception",
        message: "Invalid token - token not found",
      });
  });

  it("should be initialized with a baseURL and token", () => {    
    expect(joodle.got.defaults.options.prefixUrl).toBe(baseURL);
    expect(joodle.got.defaults.options.searchParams!.get("wstoken")).toBe(token);
    expect(joodle.got.defaults.options.searchParams!.get("moodlewsrestformat")).toBe("json");
  });

  it("should make API calls using the got library", () => {
    return expect(joodle.auth.email.getSignUpSettings()).resolves.toBeDefined();
  });

  it("should catch errors returned by Moodle", () => {
    return expect(joodle.core.webservice.getSiteInfo()).rejects.toBeDefined();
  });
});