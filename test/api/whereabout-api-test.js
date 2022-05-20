import { assert } from "chai";
import { whereaboutService } from "./whereabout-service.js";
import { maggie, testEmployees, testWhereabouts } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Whereabout API tests", () => {
  setup(async () => {
    await whereaboutService.createUser(maggie);
    await whereaboutService.authenticate(maggie);
    await whereaboutService.deleteAllUsers();
    await whereaboutService.createUser(maggie);
    await whereaboutService.authenticate(maggie);
  });
  teardown(async () => {
    await whereaboutService.deleteAllUsers();
  });

  test("create a whereabout", async () => {
    const returnedEmployee = await whereaboutService.createEmployee(testEmployees[0]);
    await whereaboutService.makeWhereabout(returnedEmployee._id, testWhereabouts[0]);
    const returnedWhereabouts = await whereaboutService.getWhereabouts(returnedEmployee._id);
    console.log(returnedWhereabouts);
    assert.equal(returnedWhereabouts.length, 1);
    assertSubset(returnedWhereabouts[0], testWhereabouts[0]);
  });
});
