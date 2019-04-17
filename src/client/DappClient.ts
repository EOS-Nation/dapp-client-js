import { V1_GET_TABLE_ROWS, V1_GET_TABLE_BY_SCOPE } from "../types/endpoints";
import { GetTableRows, GetTableByScope } from "../types";
import { HttpClient, Fetch } from "./HttpClient";

/**
 * DAPP Client
 *
 * @name DappClient
 * @param {string} endpoint dsp endpoint
 * @param {object} [options={}] optional params
 * @param {Fetch} [options.fetch=global.fetch] fetch
 * @example
 *
 * const endpoint = "https://dsp.eosn.io"
 * const client = new DappClient({ endpoint, fetch })
 */
export class DappClient extends HttpClient {
    constructor(endpoint: string, options: {
        fetch?: Fetch,
    } = {}) {
        super(endpoint, options);
    }

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
    public get_table_rows<T = unknown>(code: string, scope: string, table: string, options: {
        index_position?: number,
        json?: boolean,
        key_type?: string,
        lower_bound?: string,
        upper_bound?: string,
        table_key?: string,
        encode_type?: string,
        show_payer?: boolean,
    } = {}) {
        // Optional params
        const json = options.json === false ? false : true;
        const index_position = options.index_position || 1;
        const key_type = options.key_type || "";
        const table_key = options.table_key || "";
        const lower_bound = options.lower_bound || "";
        const upper_bound = options.upper_bound || "";
        const encode_type = options.encode_type || "";
        const show_payer = options.show_payer === true ? true : false;

        return this.post<GetTableRows<T>>(V1_GET_TABLE_ROWS, {
            code,
            table,
            scope,
            json,
            index_position,
            key_type,
            table_key,
            lower_bound,
            upper_bound,
            encode_type,
            show_payer,
        });
    }

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
    public get_table_by_scope(code: string, options: {
        table?: string,
        lower_bound?: string,
        upper_bound?: string,
        limit?: number,
        reverse?: boolean,
    } = {}) {
        return this.post<GetTableByScope>(V1_GET_TABLE_BY_SCOPE, {
            code,
            table: options.table,
            lower_bound: options.lower_bound,
            upper_bound: options.upper_bound,
            limit: options.limit,
            reverse: options.reverse,
        });
    }
}
