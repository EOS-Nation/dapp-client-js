export interface Package {
  id: number;
  api_endpoint: string;
  package_json_uri: string;
  package_id: string;
  service: string;
  provider: string;
  quota: string;
  package_period: number;
  min_stake_quantity: string;
  min_unstake_period: number;
  enabled: number;
}