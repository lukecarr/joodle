import nock from "nock";
import { Joodle } from "../../../src";
import { SignUpUser } from "../../../src/modules/auth/email/sign-up-user";

describe("The auth.email module", () => {
  const baseURL = "https://moodle.example.com/";
  const token = "abc123";
  let joodle: Joodle;

  const error = {
    exception: "webservice_access_exception",
    errorcode: "accessexception",
    message: "Access control exception (Access to the function is not allowed.",
    debuginfo: "Access to the function is not allowed.",
  };

  beforeAll(() => {
    joodle = new Joodle({
      baseURL,
      token,
    });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=auth_email_get_signup_settings&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        namefields: ["firstname", "lastname"],
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=auth_email_get_signup_settings&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=auth_email_signup_user&username=test&firstname=Test&lastname=User&email=test%40example.com&password=password&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        success: 1,
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=auth_email_signup_user&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);
  });

  describe("the getSignUpSettings() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.modules.auth.email.getSignUpSettings()
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.modules.auth.email.getSignUpSettings()
      ).rejects.toBeDefined();
    });
  });

  describe("the signUpUser() function", () => {
    const user: SignUpUser = {
      username: "test",
      firstname: "Test",
      lastname: "User",
      email: "test@example.com",
      password: "password",
    };

    it("should handle successful responses", () => {
      return expect(
        joodle.modules.auth.email.signUpUser(user)
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.modules.auth.email.signUpUser(user)
      ).rejects.toBeDefined();
    });
  });
});
