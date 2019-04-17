# DAPP JavaScript/TypeScript Client Library

## Installation

Using Yarn:

```bash
yarn add dapp-client
```

or using NPM:

```bash
npm install --save dapp-client
```

or using latest:

```bash
npm install --save git+ssh://git@github.com:EOS-Nation/dapp-client-js.git
```

## Quick Start

**CommonJS**

```js
const { DappClient } = require("dapp-client")
const fetch = require("isomorphic-fetch")

const endpoint = "https://dsp.eosn.io"
const client = new DappClient(endpoint, { fetch })
```

**TypeScript**

```ts
import { DappClient } from "dapp-client"
import fetch from "isomorphic-fetch"

const endpoint = "https://dsp.eosn.io"
const client = new DappClient(endpoint, { fetch })
```

## Supported Endpoints

```bash
# Chain
/v1/chain/get_table_rows
/v1/chain/get_table_by_scope
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [DAPP](#dapp)
    -   [Examples](#examples)
-   [DappClient](#dappclient)
    -   [Parameters](#parameters)
    -   [Examples](#examples-1)
    -   [get_table_package](#get_table_package)
        -   [Parameters](#parameters-1)
        -   [Examples](#examples-2)
    -   [get_table_accountext](#get_table_accountext)
        -   [Parameters](#parameters-2)
        -   [Examples](#examples-3)
    -   [get_table_rows](#get_table_rows)
        -   [Parameters](#parameters-3)
        -   [Examples](#examples-4)
    -   [get_table_by_scope](#get_table_by_scope)
        -   [Parameters](#parameters-4)
        -   [Examples](#examples-5)
-   [claimrewards](#claimrewards)
    -   [Parameters](#parameters-5)
-   [close](#close)
    -   [Parameters](#parameters-6)
-   [closeprv](#closeprv)
    -   [Parameters](#parameters-7)
-   [create](#create)
    -   [Parameters](#parameters-8)
-   [issue](#issue)
    -   [Parameters](#parameters-9)
-   [modifypkg](#modifypkg)
    -   [Parameters](#parameters-10)
-   [open](#open)
    -   [Parameters](#parameters-11)
-   [refund](#refund)
    -   [Parameters](#parameters-12)
-   [regpkg](#regpkg)
    -   [Parameters](#parameters-13)
-   [retire](#retire)
    -   [Parameters](#parameters-14)
-   [selectpkg](#selectpkg)
    -   [Parameters](#parameters-15)
-   [stake](#stake)
    -   [Parameters](#parameters-16)
-   [transfer](#transfer)
    -   [Parameters](#parameters-17)
-   [unstake](#unstake)
    -   [Parameters](#parameters-18)
-   [usage](#usage)
    -   [Parameters](#parameters-19)
-   [xsignal](#xsignal)
    -   [Parameters](#parameters-20)

### DAPP

DAPP

#### Examples

```javascript
import { names } from "dapp-client"

names.DAPP // => "......2ke1.o4"
```

### DappClient

DAPP Client

#### Parameters

-   `endpoint` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** dsp endpoint
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.dappservices` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** dappservices code (optional, default `"dappservices"`)
    -   `options.ipfsservice1` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** ipfsservice1 code (optional, default `"ipfsservice1"`)
    -   `options.fetch` **[Fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API)** fetch (optional, default `global.fetch`)

#### Examples

```javascript
const endpoint = "https://dsp.eosn.io"
const client = new DappClient(endpoint, { fetch })
```

#### get_table_package

Get TABLE package

##### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)

##### Examples

```javascript
const response = await client.get_table_package({limit: 500});

for (const row of response.rows) {
    console.log(row);
    // {
    //     id: 9,
    //     api_endpoint: 'https://dsp.eosn.io',
    //     package_json_uri: 'https://eosnation.io/package1.dsp-package.json',
    //     package_id: 'package1',
    //     service: 'ipfsservice1',
    //     provider: 'eosnationdsp',
    //     quota: '500.0000 QUOTA',
    //     package_period: 86400,
    //     min_stake_quantity: '10000.0000 DAPP',
    //     min_unstake_period: 3600,
    //     enabled: 1
    // }
}
```

#### get_table_accountext

Get TABLE accountext

##### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)

##### Examples

```javascript
const response = await client.get_table_accountext({limit: 500});

for (const row of response.rows) {
    console.log(row);
    // {
    //     id: 29,
    //     account: 'eosnationdsp',
    //     service: 'ipfsservice1',
    //     provider: 'eosnationdsp',
    //     quota: '0.0001 QUOTA',
    //     balance: '255101.1461 DAPP',
    //     last_usage: '1555466031000',
    //     last_reward: '1555466031000',
    //     package: 'package2',
    //     pending_package: 'package2',
    //     package_started: '1555466031000',
    //     package_end: '1555469631000'
    // }
}
```

#### get_table_rows

[GET /v1/chain/get_table_rows](https://developers.eos.io/eosio-nodeos/reference#get_table_rows)

Returns an object containing rows from the specified table.

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the smart contract that controls the provided table
-   `scope` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The account to which this data belongs
-   `table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the table to query
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Limit the result amount (optional, default `10`)
    -   `options.show_payer` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Show Payer (optional, default `false`)
    -   `options.json` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** JSON response (optional, default `true`)
    -   `options.index_position` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Position of the index used (optional, default `1`)
    -   `options.key_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Type of key specified by index_position (for example - uint64_t or name)
    -   `options.table_key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Table Key
    -   `options.encode_type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Encode type

##### Examples

```javascript
const response = await rpc.get_table_rows("<code>", "<scope>", "<table>");
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableRows>** table rows

#### get_table_by_scope

[GET /v1/chain/get_table_by_scope](https://developers.eos.io/eosio-nodeos/reference#get_table_by_scope)

Returns an object containing rows from the specified table.

##### Parameters

-   `code` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name of the contract to return table data for
-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** optional params (optional, default `{}`)
    -   `options.table` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filter results by table
    -   `options.lower_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is not less than provided value in set
    -   `options.upper_bound` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** Filters results to return the first element that is greater than provided value in set
    -   `options.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)?** Limit number of results returned.
    -   `options.reverse` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Reverse the order of returned results (optional, default `false`)

##### Examples

```javascript
const response = await rpc.get_table_by_scope();
console.log(response);
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;GetTableByScope>** table rows

### claimrewards

claimrewards

#### Parameters

-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name

### close

close

#### Parameters

-   `owner` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `symbol` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** symbol_code

### closeprv

closeprv

#### Parameters

-   `owner` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `service` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name

### create

create

#### Parameters

-   `maximum_supply_amount` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** uint64_t
-   `inflation_per_block` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** double
-   `inflation_starts_at` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** uint64_t

### issue

issue

#### Parameters

-   `to` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `quantity` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** asset
-   `memo` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** string

### modifypkg

modifypkg

#### Parameters

-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `package_id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `service` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `api_endpoint` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** std::string
-   `package_json_uri` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** std::string

### open

open

#### Parameters

-   `owner` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `symbol` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** symbol_code
-   `ram_payer` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name

### refund

refund

#### Parameters

-   `to` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `service` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `symcode` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** symbol_code

### regpkg

regpkg

#### Parameters

-   `newpackage` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** package

### retire

retire

#### Parameters

-   `quantity` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** asset
-   `memo` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** string

### selectpkg

selectpkg

#### Parameters

-   `owner` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `service` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `pkg` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name

### stake

stake

#### Parameters

-   `from` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `service` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `quantity` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** asset

### transfer

transfer

#### Parameters

-   `from` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `to` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `quantity` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** asset
-   `memo` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** string

### unstake

unstake

#### Parameters

-   `to` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `service` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `quantity` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** asset

### usage

usage

#### Parameters

-   `usage_report` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** usage_t

### xsignal

xsignal

#### Parameters

-   `service` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `action` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `provider` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
-   `pkg`  
-   `signalRawData` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** std::vector<char>
-   `package` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name
