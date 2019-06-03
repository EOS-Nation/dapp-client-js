import { client } from "./client";

(async () => {
    const response = await client.get_table_staking("eosnationdsp", {limit: 5});

    for (const row of response.rows) {
        console.log(row);
        // {
        //     id: 0,
        //     account: 'eosnationdsp',
        //     balance: '0.0000 DAPP',
        //     provider: 'eosnationdsp',
        //     service: 'ipfsservice1'
        // }
    }
})().catch((e) => { console.log(e); });
