import nock from "nock";
import { Joodle } from "../../../src";

describe("The core.user module", () => {
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
        `/webservice/rest/server.php?wsfunction=core_user_agree_site_policy&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        status: true,
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_agree_site_policy&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_create_users&users%5B0%5D%5Busername%5D=test&users%5B0%5D%5Bfirstname%5D=Test&users%5B0%5D%5Blastname%5D=User&users%5B0%5D%5Bemail%5D=test%40example.com&users%5B0%5D%5Bpassword%5D=password&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        "0": {
          id: 123,
          username: "test",
        },
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_create_users&users%5B0%5D%5Busername%5D=test&users%5B0%5D%5Bfirstname%5D=Test&users%5B0%5D%5Blastname%5D=User&users%5B0%5D%5Bemail%5D=test%40example.com&users%5B0%5D%5Bpassword%5D=password&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_delete_users&userids%5B0%5D=1&userids%5B1%5D=2&userids%5B2%5D=3&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_delete_users&userids%5B0%5D=1&userids%5B1%5D=2&userids%5B2%5D=3&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_course_user_profiles&userlist%5B0%5D%5Buserid%5D=1&userlist%5B0%5D%5Bcourseid%5D=2&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_course_user_profiles&userlist%5B0%5D%5Buserid%5D=1&userlist%5B0%5D%5Bcourseid%5D=2&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_private_files_info&userid=1&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        filecount: 10,
        foldercount: 2,
        filesize: 1259418,
        filesizewithoutreferences: 12895,
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_private_files_info&userid=0&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        filecount: 35,
        foldercount: 6,
        filesize: 538902,
        filesizewithoutreferences: 94730,
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_private_files_info&userid=0&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_user_preferences&name&userid=1&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        preferences: [
          {
            name: "some_preference",
            value: "abc123",
          },
        ],
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_user_preferences&name&userid=1&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_set_user_preferences&preferences%5B0%5D%5Bname%5D=some_preference&preferences%5B0%5D%5Bvalue%5D=abc123&preferences%5B0%5D%5Buserid%5D=1&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        saved: [
          {
            name: "some_preference",
            value: "abc123",
            userid: 1,
          },
        ],
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_set_user_preferences&preferences%5B0%5D%5Bname%5D=some_preference&preferences%5B0%5D%5Bvalue%5D=abc123&preferences%5B0%5D%5Buserid%5D=1&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_users&criteria%5B0%5D%5Bkey%5D=firstname&criteria%5B0%5D%5Bvalue%5D=Test&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        users: [
          {
            id: 1,
            firstname: "Test",
            fullname: "Test User",
            profileimageurlsmall: "https://example.com/small.png",
            profileimageurl: "https://example.com/normal.png",
          },
          {
            id: 2,
            firstname: "Test",
            fullname: "Test User 2",
            profileimageurlsmall: "https://example.com/small-2.png",
            profileimageurl: "https://example.com/normal-2.png",
          },
        ],
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_users&criteria%5B0%5D%5Bkey%5D=firstname&criteria%5B0%5D%5Bvalue%5D=Test&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_users_by_field&field=id&values%5B0%5D=1&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        "0": {
          id: 1,
          firstname: "Test",
          fullname: "Test User",
          profileimageurlsmall: "https://example.com/small.png",
          profileimageurl: "https://example.com/normal.png",
        },
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_users_by_field&field=id&values%5B0%5D=1&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_update_picture&draftitemid=1&userid=1&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        success: true,
        profileimageurl: "https://example.com/normal.png",
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_users_by_field&draftitemid=1&userid=1&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_update_picture&draftitemid=0&delete=1&userid=1&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        success: true,
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_user_get_users_by_field&draftitemid=0&delete=1&userid=1&wstoken=xyz789&moodlewsrestformat=json`
      )
      .reply(200, error);
  });

  describe("the agreeSitePolicy() function", () => {
    it("should handle successful responses", async () => {
      expect((await joodle.core.user.agreeSitePolicy()).status).toBeTruthy();
    });

    it("should handle erroneous responses", () => {
      return expect(joodle.core.user.agreeSitePolicy()).rejects.toBeDefined();
    });
  });

  describe("the createUsers() function", () => {
    const input = {
      username: "test",
      firstname: "Test",
      lastname: "User",
      email: "test@example.com",
      password: "password",
    };

    it("should handle successful responses", async () => {
      const { users } = await joodle.core.user.createUsers(input);
      expect(users).toHaveLength(1);
      expect(users[0].id).toEqual(123);
      expect(users[0].username).toEqual(input.username);
    });

    it("should handle erroneous responses", () => {
      return expect(joodle.core.user.createUsers(input)).rejects.toBeDefined();
    });
  });

  describe("the deleteUsers() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.core.user.deleteUsers(1, 2, 3)
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.deleteUsers(1, 2, 3)
      ).rejects.toBeDefined();
    });
  });

  describe("the getCourseUserProfiles() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.core.user.getCourseUserProfiles({
          userid: 1,
          courseid: 2,
        })
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.getCourseUserProfiles({
          userid: 1,
          courseid: 2,
        })
      ).rejects.toBeDefined();
    });
  });

  describe("the getPrivateFilesInfo() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.core.user.getPrivateFilesInfo(1)
      ).resolves.toBeDefined();
    });

    it("should handle an undefined parameter (defaulting to 0)", () => {
      return expect(
        joodle.core.user.getPrivateFilesInfo()
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.getPrivateFilesInfo()
      ).rejects.toBeDefined();
    });
  });

  describe("the getUserPreferences() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.core.user.getUserPreferences("", 1)
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.getUserPreferences("", 1)
      ).rejects.toBeDefined();
    });
  });

  describe("the setUserPreferences() function", () => {
    it("should handle successful responses", () => {
      return expect(
        joodle.core.user.setUserPreferences({
          name: "some_preference",
          value: "abc123",
          userid: 1,
        })
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.setUserPreferences({
          name: "some_preference",
          value: "abc123",
          userid: 1,
        })
      ).rejects.toBeDefined();
    });
  });

  describe("the getUsers() function", () => {
    it("should handle successful responses", async () => {
      const { users } = await joodle.core.user.getUsers({
        key: "firstname",
        value: "Test",
      });
      expect(users).toHaveLength(2);
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.getUsers({
          key: "firstname",
          value: "Test",
        })
      ).rejects.toBeDefined();
    });
  });

  describe("the getUsersByField() function", () => {
    it("should handle successful responses", async () => {
      const { users } = await joodle.core.user.getUsersByField("id", 1);
      expect(users).toHaveLength(1);
      expect(users[0].id).toEqual(1);
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.getUsersByField("id", 1)
      ).rejects.toBeDefined();
    });
  });

  describe("the updateUserPicture() function", () => {
    it("should handle successful responses", async () => {
      return expect(
        joodle.core.user.updateUserPicture(1, 1)
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.updateUserPicture(1, 1)
      ).rejects.toBeDefined();
    });
  });

  describe("the deleteUserPicture() function", () => {
    it("should handle successful responses", async () => {
      return expect(
        joodle.core.user.deleteUserPicture(1)
      ).resolves.toBeDefined();
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.core.user.deleteUserPicture(1)
      ).rejects.toBeDefined();
    });
  });
});
