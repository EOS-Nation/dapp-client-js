import { client } from "./client";

(async () => {
    const response = await client.get_all_table_rows<any>("eosio.forum", "eosio.forum", "proposal", "proposal_name");

    for (const row of response.rows) {
        console.log(row);
        // {
        //     proposal_name: 'wpf2fund.ubi',
        //     proposer: 'babajibabaji',
        //     title: 'Use the Worker Proposal Fund for Universal Basic Income for All',
        //     proposal_json: '{"content":"","type":"poll-yna-v1"}',
        //     created_at: '2019-05-07T08:17:12',
        //     expires_at: '2019-05-31T23:55:00'
        // }
    }
})().catch((e) => { console.log(e); });
