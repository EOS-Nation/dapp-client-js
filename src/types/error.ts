// export interface ErrorData {
//   code: string;
//   trace_id?: string;
//   message: string;
//   details?: { [key: string]: any };
// }

// export class DappError extends Error {
//   public description: string;
//   public cause?: Error;

//   constructor(message: string, cause?: Error) {
//     super(message);

//     this.description = message;
//     this.cause = cause;
//   }
// }

// export class DappApiError extends DappError implements ErrorData {
//   public code: string;
//   public trace_id?: string;
//   public message: string;
//   public details?: { [key: string]: any };

//   constructor(data: ErrorData, cause?: Error) {
//     super(data.message, cause);

//     this.code = data.code;
//     this.trace_id = data.trace_id;
//     this.message = data.message;
//     this.details = data.details;
//   }
// }

// export class DappClientError extends DappError {
//   constructor(message: string, cause?: Error) {
//     super(message, cause);
//   }
// }

/**
 * @ignore
 * @module RPC-Error
 *
 * copyright defined in eosjs/LICENSE.txt
 */
export class RpcError extends Error {
  public json: any;

  constructor(json: any) {
      if (json.error && json.error.details && json.error.details.length && json.error.details[0].message) {
          super(json.error.details[0].message);
      } else if (json.processed && json.processed.except && json.processed.except.message) {
          super(json.processed.except.message);
      } else {
          super(json.message);
      }
      Object.setPrototypeOf(this, RpcError.prototype);
      this.json = json;
  }
}

/**
 * @ignore
 */
export class RpcStatusError extends Error {
  public response: any;

  constructor(response: any) {
      if (response.status === 405) {
          super(response.statusText);
      }

      Object.setPrototypeOf(this, RpcStatusError.prototype);
      this.response = response;
  }
}
