import * as endpoints from "./types/endpoints";
import { delay } from "./utils";
import {
    Package,
    Accountext,
} from "./types/dappservices";
import {
    GetInfo,
    GetTableRow,
    GetTableRows,
    GetTableByScope,
    GetCurrencyStats,
    GetCurrencyBalance,
} from "./types";
import * as names from "./types/names";
import { HttpClient, Fetch } from "./HttpClient";

/**
 * DAPP Client
 *
 * @name DappClient
 * @param {string} endpoint dsp endpoint
 * @param {object} [options={}] optional params
 * @param {string} [options.dappservices="dappservices"] DAPP Services contract
 * @param {string} [options.ipfsservice1="ipfsservice1"] IPFS Services contract
 * @param {string} [options.oracleservic="oracleservic"] Oracle Services contract
 * @param {string} [options.cronservices="cronservices"] Cron Services contract
 * @param {Fetch} [options.fetch=global.fetch] fetch
 * @example
 *
 * const endpoint = "https://dsp.eosn.io"
 * const client = new DappClient(endpoint, { fetch })
 */
export class DappClient extends HttpClient {
    public dappservices = "dappservices";
    public ipfsservice1 = "ipfsservice1";
    public oracleservic = "oracleservic";
    public cronservices = "cronservices";

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
     * @param {string} scope The account to which this data belongs
     * @param {string} table The name of the table to query
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

        return this.post<GetTableRows<T>>(endpoints.V1_GET_TABLE_ROWS, {
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
     * [GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)
     *
     * Returns all objects containing rows from the specified table.
     *
     * @param {string} code The name of the smart contract that controls the provided table
     * @param {string} scope The account to which this data belongs
     * @param {string} table The name of the table to query
     * @param {string} lower_bound_key Key value to identify `lower_bound` object
     * @param {object} [options={}] optional params
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit=1500] Limit the result amount per `get_table_rows` API request
     * @param {boolean} [options.show_payer=false] Show Payer
     * @param {boolean} [options.json=true] JSON response
     * @param {number} [options.index_position=1] Position of the index used
     * @param {string} [options.key_type] Type of key specified by index_position (for example - uint64_t or name)
     * @param {string} [options.table_key] Table Key
     * @param {string} [options.encode_type] Encode type
     * @param {number} [options.delay_ms] Delay in ms between API calls (helps prevents rate limited APIs)
     * @returns {Promise<GetTableRows>} table rows
     * @example
     *
     * const response = await rpc.get_all_table_rows("<code>", "<scope>", "<table>", "<lower_bound_key>");
     * console.log(response);
     */
    public async get_all_table_rows<T = unknown>(code: string, scope: string, table: string, lower_bound_key: string, options: {
        index_position?: number,
        json?: boolean,
        key_type?: string,
        lower_bound?: string,
        upper_bound?: string,
        table_key?: string,
        encode_type?: string,
        show_payer?: boolean,
        limit?: number,
        delay_ms?: number,
    } = {}): Promise<GetTableRows<T>> {
        // Optional params from `get_table_rows`
        const json = options.json === false ? false : true;
        const index_position = options.index_position || 1;
        const limit = options.limit || 1500;
        const key_type = options.key_type || "";
        const table_key = options.table_key || "";
        const upper_bound = options.upper_bound || "";
        const encode_type = options.encode_type || "";
        const show_payer = options.show_payer === true ? true : false;

        // Delay in ms between API calls (helps prevents rate limited APIs)
        const delay_ms = options.delay_ms || 10;

        // Track latest used `lower_bound` unique identifier key
        let lower_bound = options.lower_bound || "";

        // Data container
        const rows = new Map<string, T>();

        while (true) {
            const response = await this.get_table_rows<any>(code, scope, table, {
                json,
                index_position,
                limit,
                key_type,
                table_key,
                lower_bound,
                upper_bound,
                encode_type,
                show_payer,
            });
            for (const row of response.rows) {
                // Adding to Map removes duplicates entries
                const key = row[lower_bound_key];
                rows.set(key, row);

                // Set lower bound
                lower_bound = key;
            }
            // prevent hitting rate limits from API endpoints
            await delay(delay_ms);

            // end of table rows
            if (response.more === false) { break; }
        }
        return {
            more: false,
            rows: Array.from(rows.values()),
        };
    }

    /**
     * [GET /v1/dsp/ipfsservice1/get_table_row](https://docs.liquidapps.io)
     *
     * Returns an object containing row from the specified table.
     *
     * @param {string} contract The name of the smart contract that controls the provided table
     * @param {string} scope The account to which this data belongs
     * @param {string} table The name of the table to query
     * @param {string} key The key value to query
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
     * const response = await rpc.dsp_get_table_row("<contract>", "<scope>", "<table>", "<key>");
     * console.log(response);
     */
    public dsp_get_table_row<T = unknown>(contract: string, scope: string, table: string, key: string, options: {
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

        return this.post<GetTableRow<T>>(endpoints.V1_DSP_GET_TABLE_ROW, {
            contract,
            table,
            scope,
            key,
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

        return this.post<GetTableByScope>(endpoints.V1_GET_TABLE_BY_SCOPE, {
            code,
            table,
            lower_bound,
            upper_bound,
            limit,
            reverse,
        });
    }

    /**
     * [GET /v1/chain/get_currency_balance](https://developers.eos.io/eosio-nodeos/reference#get_currency_balance)
     *
     * Retrieve the stats of for a given currency
     *
     * @param {string} code The contract that operates the currency
     * @param {string} account The account to query balances for
     * @param {string} symbol The symbol for the currency if the contract operates multiple currencies
     * @returns {Promise<GetCurrencyBalance>} table rows
     * @example
     *
     * const response = await rpc.get_currency_balance("eosio.token", "eosio.null", "EOS");
     * console.log(response);
     */
    public get_currency_balance(code: string, account: string, symbol: string) {
        return this.post<GetCurrencyBalance>(endpoints.V1_GET_CURRENCY_BALANCE, {
            code,
            account,
            symbol,
        });
    }

    /**
     * [GET /v1/chain/get_currency_stats](https://developers.eos.io/eosio-nodeos/reference#get_currency_stats)
     *
     * Retrieve the stats of for a given currency
     *
     * @param {string} code The contract that operates the currency
     * @param {string} symbol The symbol for the currency if the contract operates multiple currencies
     * @returns {Promise<GetCurrencyStats>} table rows
     * @example
     *
     * const response = await rpc.get_currency_stats("eosio.token", "EOS");
     * console.log(response);
     */
    public get_currency_stats(code: string, symbol: string) {
        return this.post<GetCurrencyStats>(endpoints.V1_GET_CURRENCY_STATS, {
            code,
            symbol,
        });
    }

    /**
     * [GET /v1/chain/get_info](https://developers.eos.io/eosio-nodeos/reference#get_info)
     *
     * Returns an object containing various details about the blockchain.
     *
     * @returns {Promise<GetInfo>} table rows
     * @example
     *
     * const response = await rpc.get_info();
     * console.log(response);
     */
    public get_info() {
        return this.post<GetInfo>(endpoints.V1_GET_INFO);
    }
}
