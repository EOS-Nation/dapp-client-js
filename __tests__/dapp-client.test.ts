import fetch from "isomorphic-fetch";
import { DappClient } from "../src";

const endpoint = process.env.DSP_ENDPOINT || "https://dsp.eosn.io";
const client = new DappClient(endpoint, { fetch });

test("DappClient.get_table_rows", async () => {
    const response = await client.get_table_rows("dappservices", "dappservices", "package");
    expect(!!response).toBeTruthy();
});

test("DappClient.get_table_by_scope", async () => {
  const response = await client.get_table_by_scope("dappservices");
  expect(!!response).toBeTruthy();
});

test("DappClient.get_table_package", async () => {
  const response = await client.get_table_package();
  expect(!!response).toBeTruthy();
});

test("DappClient.get_table_accountext", async () => {
  const response = await client.get_table_accountext();
  expect(!!response).toBeTruthy();
});

test("DappClient.get_info", async () => {
  const response = await client.get_info();
  expect(!!response).toBeTruthy();
});

test("DappClient.get_currency_stats", async () => {
  const response = await client.get_currency_stats("eosio.token", "eos");
  expect(!!response).toBeTruthy();
});
