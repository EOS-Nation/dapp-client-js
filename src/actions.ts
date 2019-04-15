/**
 * claimrewards
 *
 * @param {string} provider name
 */
export function claimrewards(provider: string) {
    return {
        provider,
    };
}

/**
 * close
 *
 * @param {string} owner name
 * @param {string} symbol symbol_code
 */
export function close(owner: string, symbol: string) {
    return {
        owner,
        symbol,
    };
}

/**
 * closeprv
 *
 * @param {string} owner name
 * @param {string} service name
 * @param {string} provider name
 */
export function closeprv(owner: string, service: string, provider: string) {
    return {
        owner,
        service,
        provider,
    };
}

/**
 * create
 *
 * @param {string} maximum_supply_amount uint64_t
 * @param {number} inflation_per_block double
 * @param {string} inflation_starts_at uint64_t
 */
export function create(maximum_supply_amount: string, inflation_per_block: number, inflation_starts_at: string) {
    return {
        maximum_supply_amount,
        inflation_per_block,
        inflation_starts_at,
    };
}

/**
 * @private
 *
 * disablepkg
 *
 * @param {string} service name
 * @param {string} provider name
 * @param {string} package_id name
 */
export function disablepkg(service: string, provider: string, package_id: string) {
    return {
        service,
        provider,
        package_id,
    };
}

/**
 * @private
 *
 * enablepkg
 *
 * @param {string} service name
 * @param {string} provider name
 * @param {string} package_id name
 */
export function enablepkg(service: string, provider: string, package_id: string) {
    return {
        service,
        provider,
        package_id,
    };
}

/**
 * issue
 *
 * @param {string} to name
 * @param {string} quantity asset
 * @param {string} memo string
 */
export function issue(to: string, quantity: string, memo: string) {
    return {
        to,
        quantity,
        memo,
    };
}

/**
 * modifypkg
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
 * open
 *
 * @param {string} owner name
 * @param {string} symbol symbol_code
 * @param {string} ram_payer name
 */
export function open(owner: string, symbol: string, ram_payer: string) {
    return {
        owner,
        symbol,
        ram_payer,
    };
}

/**
 * refund
 *
 * @param {string} to name
 * @param {string} provider name
 * @param {string} service name
 * @param {string} symcode symbol_code
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
 * regpkg
 *
 * @param {string} newpackage package
 */
export function regpkg(newpackage: string) {
    return {
        newpackage,
    };
}

/**
 * retire
 *
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
 * selectpkg
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
 * stake
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
 * transfer
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
 * unstake
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
 * usage
 *
 * @param {string} usage_report usage_t
 */
export function usage(usage_report: string) {
    return {
        usage_report,
    };
}

/**
 * xsignal
 *
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
