import { client } from "./client";

(async () => {
    const response = await client.dsp_get_table_row<{balance: string}>("eosndappdapp", "deniscarrier", "accounts", "VDAPP");
    const { row } = response;
    console.log(row);
    // { balance: '2.0000 VDAPP' }
})().catch((e) => { console.log(e); });
