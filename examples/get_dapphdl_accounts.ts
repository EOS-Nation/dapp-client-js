import { client } from "./client";

(async () => {
    const response = await client.get_dapphdl_accounts("deniscarrier", {limit: 500});

    for (const row of response.rows) {
        console.log(row);
        // {
        //     balance: '0.0000 DAPPHDL',
        //     allocation: '0.0000 DAPPHDL',
        //     staked: '0.0000 DAPPHDL',
        //     claimed: false
        // }
    }
})().catch((e) => { console.log(e); });
