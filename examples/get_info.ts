import { client } from "./client";

(async () => {
    const response = await client.get_info();

    console.log(response);
})().catch((e) => { console.log(e); });
