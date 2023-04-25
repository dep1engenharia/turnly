// source: common.proto
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

goog.exportSymbol('proto.turnly.common.v1.ExceptionResponse', null, global);
goog.exportSymbol('proto.turnly.common.v1.Extra', null, global);
goog.exportSymbol('proto.turnly.common.v1.Meta', null, global);
goog.exportSymbol('proto.turnly.common.v1.Meta.ExceptionMessage', null, global);
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
proto.turnly.common.v1.Meta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.common.v1.Meta.repeatedFields_, null);
};
goog.inherits(proto.turnly.common.v1.Meta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.common.v1.Meta.displayName = 'proto.turnly.common.v1.Meta';
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
proto.turnly.common.v1.Meta.ExceptionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.common.v1.Meta.ExceptionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.common.v1.Meta.ExceptionMessage.displayName = 'proto.turnly.common.v1.Meta.ExceptionMessage';
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
proto.turnly.common.v1.Extra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.common.v1.Extra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.common.v1.Extra.displayName = 'proto.turnly.common.v1.Extra';
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
proto.turnly.common.v1.ExceptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.common.v1.ExceptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.common.v1.ExceptionResponse.displayName = 'proto.turnly.common.v1.ExceptionResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.common.v1.Meta.repeatedFields_ = [6];



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
proto.turnly.common.v1.Meta.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.common.v1.Meta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.common.v1.Meta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.Meta.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.turnly.common.v1.Meta.ExceptionMessage.toObject, includeInstance)
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
 * @return {!proto.turnly.common.v1.Meta}
 */
proto.turnly.common.v1.Meta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.common.v1.Meta;
  return proto.turnly.common.v1.Meta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.common.v1.Meta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.common.v1.Meta}
 */
proto.turnly.common.v1.Meta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = new proto.turnly.common.v1.Meta.ExceptionMessage;
      reader.readMessage(value,proto.turnly.common.v1.Meta.ExceptionMessage.deserializeBinaryFromReader);
      msg.addErrors(value);
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
proto.turnly.common.v1.Meta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.common.v1.Meta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.common.v1.Meta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.Meta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.turnly.common.v1.Meta.ExceptionMessage.serializeBinaryToWriter
    );
  }
};





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
proto.turnly.common.v1.Meta.ExceptionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.common.v1.Meta.ExceptionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.common.v1.Meta.ExceptionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.Meta.ExceptionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.turnly.common.v1.Meta.ExceptionMessage}
 */
proto.turnly.common.v1.Meta.ExceptionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.common.v1.Meta.ExceptionMessage;
  return proto.turnly.common.v1.Meta.ExceptionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.common.v1.Meta.ExceptionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.common.v1.Meta.ExceptionMessage}
 */
proto.turnly.common.v1.Meta.ExceptionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.turnly.common.v1.Meta.ExceptionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.common.v1.Meta.ExceptionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.common.v1.Meta.ExceptionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.Meta.ExceptionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string parameter = 1;
 * @return {string}
 */
proto.turnly.common.v1.Meta.ExceptionMessage.prototype.getParameter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.common.v1.Meta.ExceptionMessage} returns this
 */
proto.turnly.common.v1.Meta.ExceptionMessage.prototype.setParameter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.turnly.common.v1.Meta.ExceptionMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.common.v1.Meta.ExceptionMessage} returns this
 */
proto.turnly.common.v1.Meta.ExceptionMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 status = 1;
 * @return {number}
 */
proto.turnly.common.v1.Meta.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.common.v1.Meta} returns this
 */
proto.turnly.common.v1.Meta.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.turnly.common.v1.Meta.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.common.v1.Meta} returns this
 */
proto.turnly.common.v1.Meta.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.turnly.common.v1.Meta.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.common.v1.Meta} returns this
 */
proto.turnly.common.v1.Meta.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.turnly.common.v1.Meta.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.turnly.common.v1.Meta} returns this
 */
proto.turnly.common.v1.Meta.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.turnly.common.v1.Meta.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.common.v1.Meta} returns this
 */
proto.turnly.common.v1.Meta.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated ExceptionMessage errors = 6;
 * @return {!Array<!proto.turnly.common.v1.Meta.ExceptionMessage>}
 */
proto.turnly.common.v1.Meta.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.turnly.common.v1.Meta.ExceptionMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.turnly.common.v1.Meta.ExceptionMessage, 6));
};


/**
 * @param {!Array<!proto.turnly.common.v1.Meta.ExceptionMessage>} value
 * @return {!proto.turnly.common.v1.Meta} returns this
*/
proto.turnly.common.v1.Meta.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.turnly.common.v1.Meta.ExceptionMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.common.v1.Meta.ExceptionMessage}
 */
proto.turnly.common.v1.Meta.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.turnly.common.v1.Meta.ExceptionMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.common.v1.Meta} returns this
 */
proto.turnly.common.v1.Meta.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





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
proto.turnly.common.v1.Extra.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.common.v1.Extra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.common.v1.Extra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.Extra.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.turnly.common.v1.Extra}
 */
proto.turnly.common.v1.Extra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.common.v1.Extra;
  return proto.turnly.common.v1.Extra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.common.v1.Extra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.common.v1.Extra}
 */
proto.turnly.common.v1.Extra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.turnly.common.v1.Extra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.common.v1.Extra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.common.v1.Extra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.Extra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.turnly.common.v1.Extra.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.common.v1.Extra} returns this
 */
proto.turnly.common.v1.Extra.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.turnly.common.v1.Extra.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.common.v1.Extra} returns this
 */
proto.turnly.common.v1.Extra.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





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
proto.turnly.common.v1.ExceptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.common.v1.ExceptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.common.v1.ExceptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.ExceptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.turnly.common.v1.Meta.toObject(includeInstance, f)
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
 * @return {!proto.turnly.common.v1.ExceptionResponse}
 */
proto.turnly.common.v1.ExceptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.common.v1.ExceptionResponse;
  return proto.turnly.common.v1.ExceptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.common.v1.ExceptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.common.v1.ExceptionResponse}
 */
proto.turnly.common.v1.ExceptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.turnly.common.v1.Meta;
      reader.readMessage(value,proto.turnly.common.v1.Meta.deserializeBinaryFromReader);
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
proto.turnly.common.v1.ExceptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.common.v1.ExceptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.common.v1.ExceptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.common.v1.ExceptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.turnly.common.v1.Meta.serializeBinaryToWriter
    );
  }
};


/**
 * optional Meta meta = 1;
 * @return {?proto.turnly.common.v1.Meta}
 */
proto.turnly.common.v1.ExceptionResponse.prototype.getMeta = function() {
  return /** @type{?proto.turnly.common.v1.Meta} */ (
    jspb.Message.getWrapperField(this, proto.turnly.common.v1.Meta, 1));
};


/**
 * @param {?proto.turnly.common.v1.Meta|undefined} value
 * @return {!proto.turnly.common.v1.ExceptionResponse} returns this
*/
proto.turnly.common.v1.ExceptionResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.common.v1.ExceptionResponse} returns this
 */
proto.turnly.common.v1.ExceptionResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.common.v1.ExceptionResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.turnly.common.v1);
