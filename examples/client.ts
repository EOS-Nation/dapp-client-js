import fetch from "isomorphic-fetch";
import { DappClient } from "../src";

const endpoint = process.env.DSP_ENDPOINT || "https://dsp.eosn.io";
export const client = new DappClient(endpoint, { fetch });
