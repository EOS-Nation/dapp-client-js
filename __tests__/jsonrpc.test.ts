import fetch from "isomorphic-fetch";
import { JsonRpc } from "../";

const endpoint = process.env.DSP_ENDPOINT || "https://dsp.eosn.io";
const rpc = new JsonRpc(endpoint, { fetch });
