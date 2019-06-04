import * as endpoints from "./types/endpoints";
import {
    Package,
    Accountext,
    Staking,
    Refunds,
} from "./types/dappservices";
import { DapphdlAccounts } from "./types/dappairhodl1";
import * as names from "./types/names";
import { GetTableRow } from "./types";
import { Fetch } from "./HttpClient";
import { EosioClient } from "./EosioClient";

/**
 * DAPP Client
 *
 * General purpose library for the DAPP network.
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
export class DappClient extends EosioClient {
    public dappservices = "dappservices";
    public dappairhodl1 = "dappairhodl1";
    public ipfsservice1 = "ipfsservice1";
    public oracleservic = "oracleservic";
    public cronservices = "cronservices";

    constructor(endpoint: string, options: {
        fetch?: Fetch,
        dappservices?: string,
        dappairhodl1?: string,
        ipfsservice1?: string,
        oracleservic?: string,
        cronservices?: string,
    } = {}) {
        super(endpoint, options);
        this.dappservices = options.dappservices || this.dappservices;
        this.dappairhodl1 = options.dappairhodl1 || this.dappairhodl1;
        this.ipfsservice1 = options.ipfsservice1 || this.ipfsservice1;
        this.oracleservic = options.oracleservic || this.oracleservic;
        this.cronservices = options.cronservices || this.cronservices;
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
     * Get TABLE staking
     *
     * @param {string} scope dsp account
     * @param {object} [options={}] optional params
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit=10] Limit the result amount
     * @param {boolean} [options.show_payer=false] Show Payer
     * @example
     *
     * const response = await client.get_table_staking('eosnationdsp', {limit: 500});
     *
     * for (const row of response.rows) {
     *     console.log(row);
     *     // {
     *     //     id: 0,
     *     //     account: 'eosnationdsp',
     *     //     balance: '0.0000 DAPP',
     *     //     provider: 'eosnationdsp',
     *     //     service: 'ipfsservice1'
     *     // }
     * }
     */
    public get_table_staking(scope: string, options: {
        lower_bound?: string,
        upper_bound?: string,
        limit?: number,
        show_payer?: boolean,
    } = {}) {
        return this.get_table_rows<Staking>(this.dappservices, scope, "staking", options);
    }

    /**
     * Get TABLE refunds
     *
     * @param {string} scope dsp account
     * @param {object} [options={}] optional params
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit=10] Limit the result amount
     * @param {boolean} [options.show_payer=false] Show Payer
     * @example
     *
     * const response = await client.get_table_refunds('eosnationdsp', {limit: 500});
     *
     * for (const row of response.rows) {
     *     console.log(row);
     *     // {
     *     //     id: 0,
     *     //     account: 'eosnationdsp',
     *     //     amount: '10.0000 DAPP',
     *     //     unstake_time: 12345678
     *     //     provider: 'eosnationdsp',
     *     //     service: 'ipfsservice1'
     *     // }
     * }
     */
    public get_table_refunds(scope: string, options: {
        lower_bound?: string,
        upper_bound?: string,
        limit?: number,
        show_payer?: boolean,
    } = {}) {
        return this.get_table_rows<Refunds>(this.dappservices, scope, "refunds", options);
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
     * Get TABLE accounts from dappairhodl1 contract
     *
     * @param {string} [scope] user account
     * @param {object} [options={}] optional params
     * @param {string} [options.lower_bound] Filters results to return the first element that is not less than provided value in set
     * @param {string} [options.upper_bound] Filters results to return the first element that is greater than provided value in set
     * @param {number} [options.limit=10] Limit the result amount
     * @param {boolean} [options.show_payer=false] Show Payer
     * @example
     *
     * const response = await client.DAPPHDL_get_table_accounts('eosnationdsp', {limit: 500});
     *
     * for (const row of response.rows) {
     *     console.log(row);
     *     // {
     *     //     balance: '0.0000 DAPPHDL',
     *     //     allocation: '0.0000 DAPPHDL',
     *     //     staked: '0.0000 DAPPHDL',
     *     //     claimed: false
     *     // }
     * }
     */
    public DAPPHDL_get_table_accounts(scope: string, options: {
        lower_bound?: string,
        upper_bound?: string,
        limit?: number,
        show_payer?: boolean,
    } = {}) {
        return this.get_table_rows<DapphdlAccounts>(this.dappairhodl1, scope, "accounts", options);
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
     * const response = await rpc.dsp_ipfs_get_table_row("<contract>", "<scope>", "<table>", "<key>");
     * console.log(response);
     */
    public dsp_ipfs_get_table_row<T = unknown>(contract: string, scope: string, table: string, key: string, options: {
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
}
