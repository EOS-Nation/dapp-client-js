import { GetTableRows, GetTableByScope } from "./types/api";
export declare type Fetch = (url: string | Request, init?: RequestInit) => Promise<Response>;
/**
 * JsonRpc
 *
 * @param {string} endpoint dsp endpoint
 * @param {object} [options={}] optional params
 * @param {Fetch} [options.fetch] fetch
 * @param {string} [options.dappservices] dappservices code
 * @param {string} [options.ipfsservice1] ipfsservice1 code
 * @example
 *
 * const endpoint = "https://dsp.eosn.io"
 * const rpc = new JsonRpc(endpoint, { fetch })
 */
export declare class JsonRpc {
    endpoint: string;
    fetchBuiltin: Fetch;
    dappservices: string;
    ipfsservice1: string;
    constructor(endpoint: string, options?: {
        fetch?: Fetch;
        dappservices?: string;
        ipfsservice1?: string;
    });
    /**
     * post
     *
     * POST `body` to `endpoint + path`.
     * Throws detailed error information in `RpcError` when available.
     *
     * @private
     */
    post<T>(path: string, body: any): Promise<T>;
    /**
     * get
     *
     * GET `params` to `endpoint + path`.
     * Throws detailed error information in `RpcError` when available.
     *
     * @private
     */
    get<T>(path: string, params: any): Promise<T>;
    /**
     * [GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)
     *
     * Returns an object containing rows from the specified table.
     *
     * @param {string} code The name of the smart contract that controls the provided table
     * @param {string} table The name of the table to query
     * @param {string} scope The account to which this data belongs
     * @param {object} [options={}] optional params
     * @param {boolean} [options.json=true] JSON response
     * @param {number} [options.index_position=1] Position of the index used
     * @param {string} [options.key_type] Type of key specified by index_position (for example - uint64_t or name)
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {string} [options.table_key] Table Key
     * @param {string} [options.encode_type] Encode type
     * @param {boolean} [options.show_payer=false] Show Payer
     * @param {number} [options.limit=10] Limit the result amount
     * @returns {Promise<GetTableRows>} table rows
     * @example
     *
     * const response = await rpc.get_table_rows("<code>", "<scope>", "<table>");
     * console.log(response);
     */
    get_table_rows<T>(code: string, scope: string, table: string, options?: {
        index_position?: number;
        json?: boolean;
        key_type?: string;
        lower_bound?: string;
        upper_bound?: string;
        table_key?: string;
        encode_type?: string;
        show_payer?: boolean;
    }): Promise<GetTableRows<T>>;
    /**
     * [GET /v1/chain/get_table_by_scope](https://developers.eos.io/eosio-nodeos/reference#get_table_by_scope)
     *
     * Returns an object containing rows from the specified table.
     *
     * @param {string} code name of the contract to return table data for
     * @param {object} [options={}] optional params
     * @param {string} [options.table] Filter results by table
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit] Limit number of results returned.
     * @param {boolean} [options.reverse] Reverse the order of returned results
     * @returns {Promise<GetTableByScope>} table rows
     * @example
     *
     * const response = await rpc.get_table_by_scope();
     * console.log(response);
     */
    get_table_by_scope<T>(code: string, options?: {
        table?: string;
        lower_bound?: string;
        upper_bound?: string;
        limit?: number;
        reverse?: boolean;
    }): Promise<GetTableByScope<T>>;
}
