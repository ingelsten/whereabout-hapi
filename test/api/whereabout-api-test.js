import { assert } from "chai";
import { whereaboutService } from "./whereabout-service.js";
import { maggie, testCandidates, testWhereabouts } from "../fixtures.js";
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
    const returnedCandidate = await whereaboutService.createCandidate(testCandidates[0]);
    await whereaboutService.makeWhereabout(returnedCandidate._id, testWhereabouts[0]);
    const returnedWhereabouts = await whereaboutService.getWhereabouts(returnedCandidate._id);
    console.log(returnedWhereabouts);
    assert.equal(returnedWhereabouts.length, 1);
    assertSubset(returnedWhereabouts[0], testWhereabouts[0]);
  });
});
