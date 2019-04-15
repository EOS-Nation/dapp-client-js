/**
 * @private
 * @module RPC-Error
 *
 * copyright defined in eosjs/LICENSE.txt
 */
export declare class RpcError extends Error {
    json: any;
    constructor(json: any);
}
/**
 * @private
 */
export declare class RpcStatusError extends Error {
    response: any;
    constructor(response: any);
}
