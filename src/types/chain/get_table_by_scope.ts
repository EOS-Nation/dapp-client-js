export interface GetTableByScope {
  rows: TableScope[];
  more: boolean;
}

export interface TableScope {
  code: string;
  scope: string;
  table: string;
  payer: string;
  count: number;
}
