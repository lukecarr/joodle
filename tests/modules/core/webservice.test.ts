import nock from "nock";
import { Joodle } from "../../../src";

describe("The core.webservice module", () => {
  const baseURL = "https://moodle.example.com/";
  const token = "abc123";
  let joodle: Joodle;

  beforeAll(() => {
    joodle = new Joodle({
      baseURL,
      token,
    });

    nock(baseURL)
      .get(`/webservice/rest/server.php?wsfunction=core_webservice_get_site_info&wstoken=${token}&moodlewsrestformat=json`)
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
      .get(`/webservice/rest/server.php?wsfunction=core_webservice_get_site_info&wstoken=xyz789&moodlewsrestformat=json`)
      .reply(200, {
        exception: "webservice_access_exception",
        errorcode: "accessexception",
        message: "Access control exception (Access to the function core_webservice_get_site_info() is not allowed.",
        debuginfo: "Access to the function core_webservice_get_site_info() is not allowed.",
      });
  });

  describe("the getSiteInfo() function", () => {
    it("should handle successful responses", () => {
      return expect(joodle.core.webservice.getSiteInfo()).resolves.toBeDefined();
    });
  
    it("should handle erroneous responses", () => {
      return expect(joodle.core.webservice.getSiteInfo()).rejects.toBeDefined();
    });
  });
});