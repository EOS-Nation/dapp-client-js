import { actions } from "../src";

test("actions::dappservices:claimrewards", async () => {
    expect(actions.dappservices.claimrewards("eosnationdsp")).toEqual({provider: "eosnationdsp"});
});
