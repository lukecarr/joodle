import nock from "nock";
import { Joodle } from "../../../src";

describe("The gradereport.user module", () => {
  const baseURL = "https://moodle.example.com/";
  const token = "abc123";
  let joodle: Joodle;

  beforeAll(() => {
    joodle = new Joodle({
      baseURL,
      token,
    });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=gradereport_user_get_grade_items&courseid=123&userid=1&groupid=0&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        sitename: "New Site",
        username: "test",
        firstname: "Test",
        lastname: "User",
        fullname: "Test User",
        lang: "en",
        userid: 2,
        siteurl: baseURL,
        userpictureurl: `${baseURL}/picture.png`,
        functions: [
          {
            name: "core_webservice_get_site_info",
            version: "x.y.z",
          },
        ],
        downloadfiles: 1,
        uploadfiles: 1,
        release: "a.b.c",
        version: "x.y.z",
        mobilecssurl: "",
        advancedfeatures: [],
        usercanmanageownfiles: true,
        userquota: 0,
        usermaxuploadfilesize: -1,
        userhomepage: 1,
        userprivateaccesskey: "abc123",
        siteid: 1,
        sitecalendartype: "gregorian",
        usercalendartype: "gregorian",
        userissiteadmin: true,
        theme: "Boost",
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=gradereport_user_get_grade_items&courseid=123&userid=1&groupid=0&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, {
        exception: "webservice_access_exception",
        errorcode: "accessexception",
        message:
          "Access control exception (Access to the function gradereport_user_get_grade_items() is not allowed.",
        debuginfo:
          "Access to the function gradereport_user_get_grade_items() is not allowed.",
      });
  });

  describe("the getGradeItems() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.gradereport.user.getGradeItems(123, 1, undefined)
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.gradereport.user.getGradeItems(123, 1, undefined)
      ).rejects.toBeDefined();
    });
  });
});
