import { client } from "./client";
import { Package } from "../src";

(async () => {
    const response = await client.get_table_rows("dappservices", "dappservices", "package");

    for (const row of response.rows) {
        console.log(row);
        // => row
    }
})().catch((e) => { console.log(e); });
