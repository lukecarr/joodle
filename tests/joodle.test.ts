import nock from "nock";
import { Joodle } from "../src";

describe("The Joodle client class", () => {
  const baseURL = "https://moodle.example.com/";
  const token = "abc123";
  const timeout = 5000;
  const retries = 5;
  const rejectInvalidSSL = false;
  let joodle: Joodle;

  beforeAll(() => {
    joodle = new Joodle({
      baseURL,
      token,
    }, {
      timeout,
      retries,
      rejectInvalidSSL,
    });

    nock(baseURL)
      .get(`/webservice/rest/server.php?wsfunction=auth_email_get_signup_settings&wstoken=${token}&moodlewsrestformat=json`)
      .twice()
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

  it("should allow initialization through environment variables", () => {
    process.env["JOODLE_BASE_URL"] = "http://localhost";
    process.env["JOODLE_TOKEN"] = "abc123";

    expect(() => new Joodle()).not.toThrowError();

    delete process.env["JOODLE_BASE_URL"];
    delete process.env["JOODLE_TOKEN"];
  });

  it("should prioritize provided options over environment variables", () => {
    process.env["JOODLE_BASE_URL"] = "http://localhost/";
    process.env["JOODLE_TOKEN"] = "abc123";

    const baseURL = "https://moodle.example.com/";
    const joodle = new Joodle({
      baseURL,
    });

    expect(joodle.got.defaults.options.prefixUrl).toBe(baseURL);

    delete process.env["JOODLE_BASE_URL"];
    delete process.env["JOODLE_TOKEN"];
  });

  it("should allow HTTP options to be provided as a second constructor parameter", () => {
    expect(joodle.got.defaults.options.timeout.request).toBe(timeout);
    expect(joodle.got.defaults.options.retry.limit).toBe(retries);
    expect(joodle.got.defaults.options.rejectUnauthorized).toBe(rejectInvalidSSL);
  });

  it("should throw an error if the baseURL is not provided", () => {
    expect(() => new Joodle({ baseURL })).toThrowError();
  });

  it("should throw an error if the token is not provided", () => {
    expect(() => new Joodle({ token })).toThrowError();
  });

  it("should make API calls using the got library", () => {
    return expect(joodle.auth.email.getSignUpSettings()).resolves.toBeDefined();
  });

  it("should catch errors returned by Moodle", () => {
    return expect(joodle.core.webservice.getSiteInfo()).rejects.toBeDefined();
  });

  it("should expose the raw HTTP response through the getHttpResponse() function", () => {
    return joodle.auth.email.getSignUpSettings().then((response) => expect(response.getHttpResponse()).toBeDefined());
  });
});