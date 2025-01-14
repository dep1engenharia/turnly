/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  GetWidgetRequest,
  GetWidgetResponse,
} from '../../../../src/producers/channels'

export class TestWidgetsClient {
  protected readonly getOneMock = jest.fn()

  public getOne(
    _request: GetWidgetRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetWidgetResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public attachGetOneResponse(response: GetWidgetResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }
}
