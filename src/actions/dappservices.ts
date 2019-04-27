/**
 * ACTION
 *
 * `dappservices::claimrewards`
 *
 * @param {string} provider name
 * @example
 *
 * claimrewards("<DSP Provider>");
 */
export function claimrewards(provider: string) {
    return {
        provider,
    };
}

/**
 * ACTION
 *
 * `dappservices::close`
 *
 * @private
 * @param {string} owner name
 * @param {string} symbol symbol_code
 * @example
 *
 * close("dappservices", "DAPP")
 */
export function close(owner: string, symbol: string) {
    return {
        owner,
        symbol,
    };
}

/**
 * ACTION
 *
 * `dappservices::closeprv`
 *
 * @param {string} owner name
 * @param {string} service name
 * @param {string} provider name
 * @example
 *
 * closeprv("<Account>", "ipfsservice1", "<DSP Provider>")
 */
export function closeprv(owner: string, service: string, provider: string) {
    return {
        owner,
        service,
        provider,
    };
}

/**
 * ACTION
 *
 * `dappservices::create`
 *
 * @private
 * @param {string} maximum_supply_amount uint64_t
 * @param {number} inflation_per_block double
 * @param {string} inflation_starts_at uint64_t
 * @example
 *
 * create("20000000000.0000 DAPP", 0.00000000042394888, 1551196800000)
 */
export function create(maximum_supply_amount: string, inflation_per_block: number, inflation_starts_at: string) {
    return {
        maximum_supply_amount,
        inflation_per_block,
        inflation_starts_at,
    };
}

/**
 * ACTION
 *
 * `dappservices::disablepkg`
 *
 * @private
 * @param {string} service name
 * @param {string} provider name
 * @param {string} package_id name
 * @example
 *
 * disablepkg("ipfsservice1", "<DSP Provider>", "package1")
 */
export function disablepkg(service: string, provider: string, package_id: string) {
    return {
        service,
        provider,
        package_id,
    };
}

/**
 * ACTION
 *
 * `dappservices::enablepkg`
 *
 * @private
 * @param {string} service name
 * @param {string} provider name
 * @param {string} package_id name
 * @example
 *
 * enablepkg("ipfsservice1", "<DSP Provider>", "package1")
 */
export function enablepkg(service: string, provider: string, package_id: string) {
    return {
        service,
        provider,
        package_id,
    };
}

/**
 * ACTION
 *
 * `dappservices::issue`
 *
 * @private
 * @param {string} to name
 * @param {string} quantity asset
 * @param {string} memo string
 * @example
 *
 * issue("<Account>", "1.0000 DAPP", "init")
 */
export function issue(to: string, quantity: string, memo: string) {
    return {
        to,
        quantity,
        memo,
    };
}

/**
 * ACTION
 *
 * `dappservices::modifypkg`
 *
 * @param {string} provider name
 * @param {string} package_id name
 * @param {string} service name
 * @param {string} api_endpoint std::string
 * @param {string} package_json_uri std::string
 */
export function modifypkg(provider: string, package_id: string, service: string, api_endpoint: string, package_json_uri: string) {
    return {
        provider,
        package_id,
        service,
        api_endpoint,
        package_json_uri,
    };
}

/**
 * ACTION
 *
 * `dappservices::open`
 *
 * @private
 * @param {string} owner name
 * @param {string} symbol symbol_code
 * @param {string} ram_payer name
 * @example
 *
 * open("dappservices", "DAPP", "dappservices")
 */
export function open(owner: string, symbol: string, ram_payer: string) {
    return {
        owner,
        symbol,
        ram_payer,
    };
}

/**
 * ACTION
 *
 * `dappservices::refund`
 *
 * @param {string} to name
 * @param {string} provider name
 * @param {string} service name
 * @param {string} symcode symbol_code
 * @example
 *
 * refund("<Account>", "<DSP Provider>", "ipfsserver1", "DAPP")
 */
export function refund(to: string, provider: string, service: string, symcode: string) {
    return {
        to,
        provider,
        service,
        symcode,
    };
}

/**
 * ACTION
 *
 * `dappservices::regpkg`
 *
 * @param {string} newpackage package
 */
export function regpkg(newpackage: string) {
    return {
        newpackage,
    };
}

/**
 * ACTION
 *
 * `dappservices::retire`
 *
 * @private
 * @param {string} quantity asset
 * @param {string} memo string
 */
export function retire(quantity: string, memo: string) {
    return {
        quantity,
        memo,
    };
}

/**
 * ACTION
 *
 * `dappservices::selectpkg`
 *
 * @param {string} owner name
 * @param {string} provider name
 * @param {string} service name
 * @param {string} pkg name
 */
export function selectpkg(owner: string, provider: string, service: string, pkg: string) {
    return {
        owner,
        provider,
        service,
        package: pkg,
    };
}

/**
 * ACTION
 *
 * `dappservices::stake`
 *
 * @param {string} from name
 * @param {string} provider name
 * @param {string} service name
 * @param {string} quantity asset
 */
export function stake(from: string, provider: string, service: string, quantity: string) {
    return {
        from,
        provider,
        service,
        quantity,
    };
}

/**
 * ACTION
 *
 * `dappservices::transfer`
 *
 * @param {string} from name
 * @param {string} to name
 * @param {string} quantity asset
 * @param {string} memo string
 */
export function transfer(from: string, to: string, quantity: string, memo: string) {
    return {
        from,
        to,
        quantity,
        memo,
    };
}

/**
 * ACTION
 *
 * `dappservices::unstake`
 *
 * @param {string} to name
 * @param {string} provider name
 * @param {string} service name
 * @param {string} quantity asset
 */
export function unstake(to: string, provider: string, service: string, quantity: string) {
    return {
        to,
        provider,
        service,
        quantity,
    };
}

/**
 * ACTION
 *
 * `dappservices::usage`
 *
 * @private
 * @param {string} usage_report usage_t
 * @example
 *
 * usage(JSON.stringify({
 *   package: "package1",
 *   payer: "eosndappdapp",
 *   provider: "eosnationdsp",
 *   quantity: "0.0001 QUOTA",
 *   service: "ipfsservice1",
 *   success: 0
 * }));
 */
export function usage(usage_report: string) {
    return {
        usage_report,
    };
}

/**
 * ACTION
 *
 * `dappservices::xsignal`
 *
 * @private
 * @param {string} service name
 * @param {string} action name
 * @param {string} provider name
 * @param {string} package name
 * @param {string} signalRawData std::vector<char>
 */
export function xsignal(service: string, action: string, provider: string, pkg: string, signalRawData: string) {
    return {
        service,
        action,
        provider,
        package: pkg,
        signalRawData,
    };
}
