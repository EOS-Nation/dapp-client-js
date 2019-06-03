import fetch from "isomorphic-fetch";
import { DappClient } from "../src";

const endpoint = process.env.EOSIO_ENDPOINT || "https://dsp.eosn.io";
const client = new DappClient(endpoint, { fetch });

test("DappClient.get_table_package", async () => {
  const response = await client.get_table_package();
  expect(!!response).toBeTruthy();
});

test("DappClient.get_table_accountext", async () => {
  const response = await client.get_table_accountext();
  expect(!!response).toBeTruthy();
});
