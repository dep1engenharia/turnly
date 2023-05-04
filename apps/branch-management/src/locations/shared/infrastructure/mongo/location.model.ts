/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import { Location } from 'locations/shared/domain/entities/location.entity'
import { LocationStatus } from 'locations/shared/domain/enums/location-status.enum'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { IOpeningHourDocument } from 'opening-hours/shared/infrastructure/mongo/opening-hours.model'

export interface ILocationDocument
  extends Omit<
      EntityAttributes<Location>,
      'id' | 'coordinates' | 'openingHours'
    >,
    Document {
  coordinates: {
    type: string
    coordinates: number[]
  }
  openingHours: IOpeningHourDocument[]
}

export type ILocationModel = Model<ILocationDocument>

const schema = new Schema<ILocationDocument>(
  {
    _id: String,
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: LocationStatus,
      required: true,
    },
    coordinates: {
      type: {
        type: String,
        default: 'Point',
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    stopServingBeforeInMinutes: {
      type: Number,
    },
    openingHours: [
      {
        type: String,
        ref: 'OpeningHour',
      },
    ],
  },
  { timestamps }
)

schema.index({ coordinates: '2dsphere' })

export const LocationModel = mongoose.model<ILocationDocument, ILocationModel>(
  'Location',
  schema
)
