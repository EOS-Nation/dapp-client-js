import fetch from "isomorphic-fetch";
import { EosioClient } from "../src";

const endpoint = process.env.EOSIO_ENDPOINT || "https://api.eosn.io";
const client = new EosioClient(endpoint, { fetch });

test("EosioClient.get_table_rows", async () => {
    const response = await client.get_table_rows("dappservices", "dappservices", "package");
    expect(!!response).toBeTruthy();
});

test("EosioClient.get_table_by_scope", async () => {
  const response = await client.get_table_by_scope("dappservices");
  expect(!!response).toBeTruthy();
});

test("EosioClient.get_info", async () => {
  const response = await client.get_info();
  expect(!!response).toBeTruthy();
});

test("EosioClient.get_currency_stats", async () => {
  const response = await client.get_currency_stats("eosio.token", "eos");
  expect(!!response).toBeTruthy();
});
