import { assert } from "chai";
import { whereaboutService } from "./whereabout-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    whereaboutService.clearAuth();
    await whereaboutService.createUser(maggie);
    await whereaboutService.authenticate(maggie);
    await whereaboutService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await whereaboutService.createUser(maggie);
    const response = await whereaboutService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await whereaboutService.createUser(maggie);
    const response = await whereaboutService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    whereaboutService.clearAuth();
    try {
      await whereaboutService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});
