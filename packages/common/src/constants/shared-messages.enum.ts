/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum SharedMessages {
  /**
   * Application messages
   */
  APP_STARTING = 'Starting application...',
  APP_READY = 'GraphQL application successfully running on port: {PORT}',

  /**
   * DB messages
   */
  TRANSACTION_STARTING = 'Starting new transaction...',
  TRANSACTION_ENDED = 'Transaction successfully completed',
  TRANSACTION_KILL_PROCESSES = 'Killing blocked processes of transactions...',
  TRANSACTION_ROLLBACK = 'Rolling back transaction...',
  CONNECTION_NOT_FOUND = 'Oops!, Connection not found',
  DB_CONNECTED = 'Database successfully connected',

  /**
   * Generic messages
   */
  CREATING_ERROR = 'The server encountered an unexpected condition while creating the resource',
  BATCH_LIMIT = 'This request exceeds the maximum number of batch inserts. You must send a request with a maximum of 20 resources',
  COLOR_INVALID = 'The color must be in rgb format, example: #915b5b',
  UNKNOWN_EXCEPTION = 'The server encountered an unexpected condition that prevented it from fulfilling the request',
  COLLECTION_MAX_LIMIT = 'This request exceeds the maximum limit in one page, the limit must be less than {VALUE}',
  MISSING_PARAM = 'Add parameter name to avoid colliding with other parameters in this query. Rename one of its parameters to hide this warning.',
}
