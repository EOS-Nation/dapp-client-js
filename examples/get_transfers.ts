import { rpc } from "./rpc";

(async () => {
    const response = await rpc.get_table_rows("dappservices", "dappservices", "package");

    for (const row of response.rows) {
        console.log(row);
        // => row
    }
})().catch((e) => { console.log(e); });
