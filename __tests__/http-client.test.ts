import fetch from "isomorphic-fetch";
import { HttpClient } from "../src";

const endpoint = process.env.EOSIO_ENDPOINT || "https://api.eosn.io";
const client = new HttpClient(endpoint, { fetch });

test("HttpClient.get", async () => {
  const response = await client.get("/v1/chain/get_info");
  expect(!!response).toBeTruthy();
});
