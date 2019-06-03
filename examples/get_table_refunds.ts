import { client } from "./client";

(async () => {
    const response = await client.get_table_refunds("eosnationdsp", {limit: 5});

    for (const row of response.rows) {
        console.log(row);
        // {
        //     id: 0,
        //     account: 'eosnationdsp',
        //     amount: '10.0000 DAPP',
        //     unstake_time: 12345678
        //     provider: 'eosnationdsp',
        //     service: 'ipfsservice1'
        // }
    }
})().catch((e) => { console.log(e); });
