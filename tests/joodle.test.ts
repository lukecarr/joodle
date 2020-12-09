import nock from "nock";
import { Joodle } from "../src";

describe("The Joodle client class", () => {
  const baseURL = "https://moodle.example.com/";
  const token = "abc123";
  const timeout = 5000;
  const retries = 5;
  const rejectInvalidSSL = false;
  const cache = new Map();
  const http2 = false;
  let joodle: Joodle;

  beforeAll(() => {
    joodle = new Joodle(
      {
        baseURL,
        token,
      },
      {
        timeout,
        retries,
        rejectInvalidSSL,
        cache,
        http2,
      }
    );

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=auth_email_get_signup_settings&wstoken=${token}&moodlewsrestformat=json`
      )
      .thrice()
      .reply(200, {
        namefields: ["firstname", "lastname"],
        passwordpolicy: "Password must exist!",
        warnings: [],
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_webservice_get_site_info&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        errorcode: "invalidtoken",
        exception: "moodle_exception",
        message: "Invalid token - token not found",
      });
  });

  it("should be initialized with a baseURL and token", () => {
    expect(joodle.got.defaults.options.prefixUrl).toBe(baseURL);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(joodle.got.defaults.options.searchParams!.get("wstoken")).toBe(
      token
    );
    expect(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      joodle.got.defaults.options.searchParams!.get("moodlewsrestformat")
    ).toBe("json");
  });

  it("should allow initialization through environment variables", () => {
    process.env.JOODLE_BASE_URL = "http://localhost";
    process.env.JOODLE_TOKEN = "abc123";

    expect(() => new Joodle()).not.toThrowError();

    delete process.env.JOODLE_BASE_URL;
    delete process.env.JOODLE_TOKEN;
  });

  it("should prioritize provided options over environment variables", () => {
    process.env.JOODLE_BASE_URL = "http://localhost/";
    process.env.JOODLE_TOKEN = "abc123";

    const newBaseURL = "https://moodle.example.com/";
    const newJoodle = new Joodle({
      baseURL: newBaseURL,
    });

    expect(newJoodle.got.defaults.options.prefixUrl).toBe(newBaseURL);

    delete process.env.JOODLE_BASE_URL;
    delete process.env.JOODLE_TOKEN;
  });

  it("should allow HTTP options to be provided as a second constructor parameter", () => {
    expect(joodle.got.defaults.options.timeout.request).toBe(timeout);
    expect(joodle.got.defaults.options.retry.limit).toBe(retries);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(joodle.got.defaults.options.https!.rejectUnauthorized).toBe(
      rejectInvalidSSL
    );
    expect(joodle.got.defaults.options.cache).toBeInstanceOf(Map);
    expect(joodle.got.defaults.options.http2).toBe(http2);
  });

  it("should throw an error if the baseURL is not provided", () => {
    expect(() => new Joodle({ baseURL })).toThrowError();
  });

  it("should throw an error if the token is not provided", () => {
    expect(() => new Joodle({ token })).toThrowError();
  });

  it("should make API calls using the got library", () => {
    return expect(
      joodle.modules.auth.email.getSignUpSettings()
    ).resolves.toBeDefined();
  });

  it("should catch errors returned by Moodle", () => {
    return expect(
      joodle.modules.core.webservice.getSiteInfo()
    ).rejects.toBeDefined();
  });

  it("should expose the raw HTTP response through the getHttpResponse() function", () => {
    return joodle.modules.auth.email
      .getSignUpSettings()
      .then((response) => expect(response.getHttpResponse()).toBeDefined());
  });

  it("should expose a method for invoking raw functions", () => {
    expect(joodle.invoke).toBeInstanceOf(Function);
    return expect(
      joodle.invoke("auth_email_get_signup_settings")
    ).resolves.toBeDefined();
  });
});
