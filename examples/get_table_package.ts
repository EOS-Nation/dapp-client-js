import { client } from "./client";

(async () => {
    const response = await client.get_table_package({limit: 500});

    for (const row of response.rows) {
        console.log(row);
        // {
        //     id: 9,
        //     api_endpoint: 'https://dsp.eosn.io',
        //     package_json_uri: 'https://eosnation.io/package1.dsp-package.json',
        //     package_id: 'package1',
        //     service: 'ipfsservice1',
        //     provider: 'eosnationdsp',
        //     quota: '500.0000 QUOTA',
        //     package_period: 86400,
        //     min_stake_quantity: '10000.0000 DAPP',
        //     min_unstake_period: 3600,
        //     enabled: 1
        // }
    }
})().catch((e) => { console.log(e); });
