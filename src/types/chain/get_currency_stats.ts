export interface GetCurrencyStats {
  [symbol: string]: {
      supply: string;
      max_supply: string;
      issuer: string;
  };
}
