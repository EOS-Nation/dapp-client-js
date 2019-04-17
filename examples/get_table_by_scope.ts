import { client } from "./client";
import { Package } from "../src";

(async () => {
    const response = await client.get_table_by_scope("dappservices");

    for (const row of response.rows) {
        console.log(row);
        // {
        //     code: 'dappservices',
        //     scope: '......2ke1.o4',
        //     table: 'accountext',
        //     payer: 'pnxdev111111',
        //     count: 62
        // }
    }
})().catch((e) => { console.log(e); });
