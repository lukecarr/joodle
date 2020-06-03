import nock from "nock";
import { Joodle } from "../../../src";

describe("The core.role module", () => {
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
        `/webservice/rest/server.php?wsfunction=core_role_assign_roles&assignments%5B0%5D%5Broleid%5D=123&assignments%5B0%5D%5Buserid%5D=456&assignments%5B0%5D%5Bcontextlevel%5D=block&assignments%5B0%5D%5Binstanceid%5D=789&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_role_assign_roles&assignments%5B0%5D%5Broleid%5D=123&assignments%5B0%5D%5Buserid%5D=456&assignments%5B0%5D%5Bcontextlevel%5D=block&assignments%5B0%5D%5Binstanceid%5D=789&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, {
        exception: "webservice_access_exception",
        errorcode: "accessexception",
        message:
          "Access control exception (Access to the function core_webservice_get_site_info() is not allowed.",
        debuginfo:
          "Access to the function core_webservice_get_site_info() is not allowed.",
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_role_unassign_roles&unassignments%5B0%5D%5Broleid%5D=123&unassignments%5B0%5D%5Buserid%5D=456&unassignments%5B0%5D%5Bcontextlevel%5D=block&unassignments%5B0%5D%5Binstanceid%5D=789&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_role_unassign_roles&unassignments%5B0%5D%5Broleid%5D=123&unassignments%5B0%5D%5Buserid%5D=456&unassignments%5B0%5D%5Bcontextlevel%5D=block&unassignments%5B0%5D%5Binstanceid%5D=789&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, {
        exception: "webservice_access_exception",
        errorcode: "accessexception",
        message:
          "Access control exception (Access to the function core_webservice_get_site_info() is not allowed.",
        debuginfo:
          "Access to the function core_webservice_get_site_info() is not allowed.",
      });
  });

  describe("the assignRoles() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.core.role.assignRoles({
          roleid: 123,
          userid: 456,
          contextlevel: "block",
          instanceid: 789,
        })
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.role.assignRoles({
          roleid: 123,
          userid: 456,
          contextlevel: "block",
          instanceid: 789,
        })
      ).rejects.toBeDefined();
    });
  });

  describe("the unassignRoles() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.core.role.unassignRoles({
          roleid: 123,
          userid: 456,
          contextlevel: "block",
          instanceid: 789,
        })
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.role.unassignRoles({
          roleid: 123,
          userid: 456,
          contextlevel: "block",
          instanceid: 789,
        })
      ).rejects.toBeDefined();
    });
  });
});
