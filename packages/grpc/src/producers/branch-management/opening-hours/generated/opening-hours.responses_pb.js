// source: opening-hours.responses.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse', null, global);
goog.exportSymbol('proto.turnly.branch_management.v1.opening_hours.OpeningHour', null, global);
goog.exportSymbol('proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.branch_management.v1.opening_hours.OpeningHour, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.branch_management.v1.opening_hours.OpeningHour.displayName = 'proto.turnly.branch_management.v1.opening_hours.OpeningHour';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.repeatedFields_, null);
};
goog.inherits(proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.displayName = 'proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.repeatedFields_, null);
};
goog.inherits(proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.displayName = 'proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.branch_management.v1.opening_hours.OpeningHour.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dayOfWeek: jspb.Message.getFieldWithDefault(msg, 3, 0),
    closedAllDay: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    openAllDay: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    openHour: jspb.Message.getFieldWithDefault(msg, 6, 0),
    openMinutes: jspb.Message.getFieldWithDefault(msg, 7, 0),
    closeHour: jspb.Message.getFieldWithDefault(msg, 8, 0),
    closeMinutes: jspb.Message.getFieldWithDefault(msg, 9, 0),
    locationId: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.branch_management.v1.opening_hours.OpeningHour;
  return proto.turnly.branch_management.v1.opening_hours.OpeningHour.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDayOfWeek(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosedAllDay(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOpenAllDay(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpenHour(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpenMinutes(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCloseHour(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCloseMinutes(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.branch_management.v1.opening_hours.OpeningHour.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDayOfWeek();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClosedAllDay();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOpenAllDay();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getOpenHour();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getOpenMinutes();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCloseHour();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getCloseMinutes();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 day_of_week = 3;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getDayOfWeek = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setDayOfWeek = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool closed_all_day = 4;
 * @return {boolean}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getClosedAllDay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setClosedAllDay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool open_all_day = 5;
 * @return {boolean}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getOpenAllDay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setOpenAllDay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 open_hour = 6;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getOpenHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setOpenHour = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 open_minutes = 7;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getOpenMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setOpenMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 close_hour = 8;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getCloseHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setCloseHour = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 close_minutes = 9;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getCloseMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setCloseMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string location_id = 10;
 * @return {string}
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour} returns this
 */
proto.turnly.branch_management.v1.opening_hours.OpeningHour.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.turnly.branch_management.v1.opening_hours.OpeningHour.toObject, includeInstance),
    meta: (f = msg.getMeta()) && common_pb.Meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse;
  return proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.turnly.branch_management.v1.opening_hours.OpeningHour;
      reader.readMessage(value,proto.turnly.branch_management.v1.opening_hours.OpeningHour.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = new common_pb.Meta;
      reader.readMessage(value,common_pb.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.turnly.branch_management.v1.opening_hours.OpeningHour.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Meta.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OpeningHour data = 1;
 * @return {!Array<!proto.turnly.branch_management.v1.opening_hours.OpeningHour>}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.turnly.branch_management.v1.opening_hours.OpeningHour>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.turnly.branch_management.v1.opening_hours.OpeningHour, 1));
};


/**
 * @param {!Array<!proto.turnly.branch_management.v1.opening_hours.OpeningHour>} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse} returns this
*/
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.turnly.branch_management.v1.opening_hours.OpeningHour=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.turnly.branch_management.v1.opening_hours.OpeningHour, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse} returns this
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional turnly.common.v1.Meta meta = 2;
 * @return {?proto.turnly.common.v1.Meta}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.getMeta = function() {
  return /** @type{?proto.turnly.common.v1.Meta} */ (
    jspb.Message.getWrapperField(this, common_pb.Meta, 2));
};


/**
 * @param {?proto.turnly.common.v1.Meta|undefined} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse} returns this
*/
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse} returns this
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.turnly.branch_management.v1.opening_hours.OpeningHour.toObject, includeInstance),
    meta: (f = msg.getMeta()) && common_pb.Meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse;
  return proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.turnly.branch_management.v1.opening_hours.OpeningHour;
      reader.readMessage(value,proto.turnly.branch_management.v1.opening_hours.OpeningHour.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = new common_pb.Meta;
      reader.readMessage(value,common_pb.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.turnly.branch_management.v1.opening_hours.OpeningHour.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Meta.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OpeningHour data = 1;
 * @return {!Array<!proto.turnly.branch_management.v1.opening_hours.OpeningHour>}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.turnly.branch_management.v1.opening_hours.OpeningHour>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.turnly.branch_management.v1.opening_hours.OpeningHour, 1));
};


/**
 * @param {!Array<!proto.turnly.branch_management.v1.opening_hours.OpeningHour>} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse} returns this
*/
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.turnly.branch_management.v1.opening_hours.OpeningHour=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.branch_management.v1.opening_hours.OpeningHour}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.turnly.branch_management.v1.opening_hours.OpeningHour, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse} returns this
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional turnly.common.v1.Meta meta = 2;
 * @return {?proto.turnly.common.v1.Meta}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.getMeta = function() {
  return /** @type{?proto.turnly.common.v1.Meta} */ (
    jspb.Message.getWrapperField(this, common_pb.Meta, 2));
};


/**
 * @param {?proto.turnly.common.v1.Meta|undefined} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse} returns this
*/
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse} returns this
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.branch_management.v1.opening_hours.SaveOpeningHoursResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.turnly.branch_management.v1.opening_hours);
