import { client } from "./client";

(async () => {
    const response = await client.get_currency_balance("eosio.token", "eosio.null", "EOS");

    console.log(response);

})().catch((e) => { console.log(e); });
