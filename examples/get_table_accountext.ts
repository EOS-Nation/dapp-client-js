import { client } from "./client";

(async () => {
    const response = await client.get_table_accountext({limit: 500});

    for (const row of response.rows) {
        console.log(row);
        // {
        //     id: 29,
        //     account: 'eosnationdsp',
        //     service: 'ipfsservice1',
        //     provider: 'eosnationdsp',
        //     quota: '0.0001 QUOTA',
        //     balance: '255101.1461 DAPP',
        //     last_usage: '1555466031000',
        //     last_reward: '1555466031000',
        //     package: 'package2',
        //     pending_package: 'package2',
        //     package_started: '1555466031000',
        //     package_end: '1555469631000'
        // }
    }
})().catch((e) => { console.log(e); });
