import { client } from "./client";

(async () => {
    const response = await client.get_currency_stats("eosio.token", "EOS");

    console.log(response);

})().catch((e) => { console.log(e); });
