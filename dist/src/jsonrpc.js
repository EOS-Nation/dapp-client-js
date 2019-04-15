"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpoints_1 = require("./endpoints");
var rpcerror_1 = require("./rpcerror");
function queryParams(params) {
    var entries = [];
    for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = params[key];
        if (value !== undefined) {
            entries.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
    }
    return entries.join("&");
}
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
var JsonRpc = /** @class */ (function () {
    function JsonRpc(endpoint, options) {
        if (options === void 0) { options = {}; }
        this.endpoint = endpoint;
        this.dappservices = options.dappservices || "dappservices";
        this.ipfsservice1 = options.ipfsservice1 || "ipfsservice1";
        if (options.fetch) {
            this.fetchBuiltin = options.fetch;
        }
        else {
            this.fetchBuiltin = global.fetch;
        }
    }
    /**
     * post
     *
     * POST `body` to `endpoint + path`.
     * Throws detailed error information in `RpcError` when available.
     *
     * @private
     */
    JsonRpc.prototype.post = function (path, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, f, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        f = this.fetchBuiltin;
                        return [4 /*yield*/, f(this.endpoint + path, {
                                body: JSON.stringify(body),
                                method: "POST",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json.processed && json.processed.except) {
                            throw new rpcerror_1.RpcError(json);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        e_1.isFetchError = true;
                        throw e_1;
                    case 4:
                        if (!response.ok) {
                            throw new rpcerror_1.RpcError(json);
                        }
                        return [2 /*return*/, json];
                }
            });
        });
    };
    /**
     * get
     *
     * GET `params` to `endpoint + path`.
     * Throws detailed error information in `RpcError` when available.
     *
     * @private
     */
    JsonRpc.prototype.get = function (path, params) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, url, f, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.endpoint + path + "?" + queryParams(params);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        f = this.fetchBuiltin;
                        return [4 /*yield*/, f(url, {
                                method: "GET",
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new rpcerror_1.RpcStatusError(response);
                        }
                        return [4 /*yield*/, response.json()];
                    case 3:
                        json = _a.sent();
                        if (json.processed && json.processed.except) {
                            throw new rpcerror_1.RpcError(json);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        e_2.isFetchError = true;
                        throw e_2;
                    case 5:
                        if (!response.ok) {
                            throw new rpcerror_1.RpcError(json);
                        }
                        return [2 /*return*/, json];
                }
            });
        });
    };
    // /**
    //  * [GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)
    //  *
    //  * Returns an object containing rows from the specified table.
    //  *
    //  * @param {string} code The name of the smart contract that controls the provided table
    //  * @param {string} table The name of the table to query
    //  * @param {string} scope The account to which this data belongs
    //  * @param {object} [options={}] optional params
    //  * @param {IndexPosition} [options.index_position] Position of the index used
    //  * @param {string} [options.key_type] Type of key specified by index_position (for example - uint64_t or name)
    //  * @param {string} [options.encode_type] Encode type
    //  * @returns {Promise<GetTableRows>} table rows
    //  * @example
    //  *
    //  * const response = await rpc.get_table_rows();
    //  * console.log(response);
    //  */
    // public get_table_package<T>(code: string, table: string, scope: string, options: {
    //     index_position?: IndexPosition,
    //     key_type?: string,
    //     encode_type?: string,
    // } = {}) {
    //     return this.post<GetTableRows<T>>(V1_GET_TABLE_ROWS, {
    //         code,
    //         table,
    //         scope,
    //         index_position: options.index_position,
    //         key_type: options.key_type,
    //         encode_type: options.encode_type,
    //     });
    // }
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
    JsonRpc.prototype.get_table_rows = function (code, scope, table, options) {
        if (options === void 0) { options = {}; }
        // Optional params
        var json = options.json === false ? false : true;
        var index_position = options.index_position || 1;
        var key_type = options.key_type || "";
        var table_key = options.table_key || "";
        var lower_bound = options.lower_bound || "";
        var upper_bound = options.upper_bound || "";
        var encode_type = options.encode_type || "";
        var show_payer = options.show_payer === true ? true : false;
        return this.post(endpoints_1.V1_GET_TABLE_ROWS, {
            code: code,
            table: table,
            scope: scope,
            json: json,
            index_position: index_position,
            key_type: key_type,
            table_key: table_key,
            lower_bound: lower_bound,
            upper_bound: upper_bound,
            encode_type: encode_type,
            show_payer: show_payer,
        });
    };
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
    JsonRpc.prototype.get_table_by_scope = function (code, options) {
        if (options === void 0) { options = {}; }
        return this.post(endpoints_1.V1_GET_TABLE_BY_SCOPE, {
            code: code,
            table: options.table,
            lower_bound: options.lower_bound,
            upper_bound: options.upper_bound,
            limit: options.limit,
            reverse: options.reverse,
        });
    };
    return JsonRpc;
}());
exports.JsonRpc = JsonRpc;
//# sourceMappingURL=jsonrpc.js.map