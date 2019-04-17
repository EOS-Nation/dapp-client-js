import { V1_GET_TABLE_ROWS, V1_GET_TABLE_BY_SCOPE } from "../types/endpoints";
import { GetTableRows, GetTableByScope, Package, Accountext, names } from "../types";
import { HttpClient, Fetch } from "./HttpClient";

/**
 * DAPP Client
 *
 * @name DappClient
 * @param {string} endpoint dsp endpoint
 * @param {object} [options={}] optional params
 * @param {string} [options.dappservices="dappservices"] dappservices code
 * @param {string} [options.ipfsservice1="ipfsservice1"] ipfsservice1 code
 * @param {Fetch} [options.fetch=global.fetch] fetch
 * @example
 *
 * const endpoint = "https://dsp.eosn.io"
 * const client = new DappClient(endpoint, { fetch })
 */
export class DappClient extends HttpClient {
    public dappservices = "dappservices";
    public ipfsservice1 = "ipfsservice1";

    constructor(endpoint: string, options: {
        fetch?: Fetch,
    } = {}) {
        super(endpoint, options);
    }

    /**
     * Get TABLE package
     *
     * @param {object} [options={}] optional params
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit=10] Limit the result amount
     * @param {boolean} [options.show_payer=false] Show Payer
     * @example
     *
     * const response = await client.get_table_package({limit: 500});
     *
     * for (const row of response.rows) {
     *     console.log(row);
     *     // {
     *     //     id: 9,
     *     //     api_endpoint: 'https://dsp.eosn.io',
     *     //     package_json_uri: 'https://eosnation.io/package1.dsp-package.json',
     *     //     package_id: 'package1',
     *     //     service: 'ipfsservice1',
     *     //     provider: 'eosnationdsp',
     *     //     quota: '500.0000 QUOTA',
     *     //     package_period: 86400,
     *     //     min_stake_quantity: '10000.0000 DAPP',
     *     //     min_unstake_period: 3600,
     *     //     enabled: 1
     *     // }
     * }
     */
    public get_table_package(options: {
        lower_bound?: string,
        upper_bound?: string,
        limit?: number,
        show_payer?: boolean,
    } = {}) {
        return this.get_table_rows<Package>(this.dappservices, this.dappservices, "package", options);
    }

    /**
     * Get TABLE accountext
     *
     * @param {object} [options={}] optional params
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit=10] Limit the result amount
     * @param {boolean} [options.show_payer=false] Show Payer
     * @example
     *
     * const response = await client.get_table_accountext({limit: 500});
     *
     * for (const row of response.rows) {
     *     console.log(row);
     *     // {
     *     //     id: 29,
     *     //     account: 'eosnationdsp',
     *     //     service: 'ipfsservice1',
     *     //     provider: 'eosnationdsp',
     *     //     quota: '0.0001 QUOTA',
     *     //     balance: '255101.1461 DAPP',
     *     //     last_usage: '1555466031000',
     *     //     last_reward: '1555466031000',
     *     //     package: 'package2',
     *     //     pending_package: 'package2',
     *     //     package_started: '1555466031000',
     *     //     package_end: '1555469631000'
     *     // }
     * }
     */
    public get_table_accountext(options: {
        lower_bound?: string,
        upper_bound?: string,
        limit?: number,
        show_payer?: boolean,
    } = {}) {
        return this.get_table_rows<Accountext>(this.dappservices, names.DAPP, "accountext", options);
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
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit=10] Limit the result amount
     * @param {boolean} [options.show_payer=false] Show Payer
     * @param {boolean} [options.json=true] JSON response
     * @param {number} [options.index_position=1] Position of the index used
     * @param {string} [options.key_type] Type of key specified by index_position (for example - uint64_t or name)
     * @param {string} [options.table_key] Table Key
     * @param {string} [options.encode_type] Encode type
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
        limit?: number,
    } = {}) {
        // Optional params
        const json = options.json === false ? false : true;
        const index_position = options.index_position || 1;
        const limit = options.limit || 10;
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
            limit,
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
     * @param {boolean} [options.reverse=false] Reverse the order of returned results
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
        // Optional params
        const limit = options.limit || 10;
        const lower_bound = options.lower_bound || "";
        const upper_bound = options.upper_bound || "";
        const table = options.table || "";
        const reverse = options.reverse === true ? true : false;

        return this.post<GetTableByScope>(V1_GET_TABLE_BY_SCOPE, {
            code,
            table,
            lower_bound,
            upper_bound,
            limit,
            reverse,
        });
    }
}
