// source: fields.responses.proto
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
goog.exportSymbol('proto.turnly.business_data_fields.v1.fields.Field', null, global);
goog.exportSymbol('proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse', null, global);
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
proto.turnly.business_data_fields.v1.fields.Field = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.business_data_fields.v1.fields.Field.repeatedFields_, null);
};
goog.inherits(proto.turnly.business_data_fields.v1.fields.Field, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.business_data_fields.v1.fields.Field.displayName = 'proto.turnly.business_data_fields.v1.fields.Field';
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
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.repeatedFields_, null);
};
goog.inherits(proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.displayName = 'proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.business_data_fields.v1.fields.Field.repeatedFields_ = [9];



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
proto.turnly.business_data_fields.v1.fields.Field.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.business_data_fields.v1.fields.Field.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.business_data_fields.v1.fields.Field} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_data_fields.v1.fields.Field.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    label: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    placeholder: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, ""),
    entityType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isRequired: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    extrasList: jspb.Message.toObjectList(msg.getExtrasList(),
    common_pb.Extra.toObject, includeInstance)
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
 * @return {!proto.turnly.business_data_fields.v1.fields.Field}
 */
proto.turnly.business_data_fields.v1.fields.Field.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.business_data_fields.v1.fields.Field;
  return proto.turnly.business_data_fields.v1.fields.Field.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.business_data_fields.v1.fields.Field} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.business_data_fields.v1.fields.Field}
 */
proto.turnly.business_data_fields.v1.fields.Field.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setLabel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaceholder(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityType(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRequired(value);
      break;
    case 9:
      var value = new common_pb.Extra;
      reader.readMessage(value,common_pb.Extra.deserializeBinaryFromReader);
      msg.addExtras(value);
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
proto.turnly.business_data_fields.v1.fields.Field.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.business_data_fields.v1.fields.Field.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.business_data_fields.v1.fields.Field} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_data_fields.v1.fields.Field.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPlaceholder();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEntityType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsRequired();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getExtrasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      common_pb.Extra.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string placeholder = 4;
 * @return {string}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getPlaceholder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.setPlaceholder = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string entity_type = 6;
 * @return {string}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getEntityType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.setEntityType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool is_required = 7;
 * @return {boolean}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getIsRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.setIsRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated turnly.common.v1.Extra extras = 9;
 * @return {!Array<!proto.turnly.common.v1.Extra>}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.getExtrasList = function() {
  return /** @type{!Array<!proto.turnly.common.v1.Extra>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Extra, 9));
};


/**
 * @param {!Array<!proto.turnly.common.v1.Extra>} value
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
*/
proto.turnly.business_data_fields.v1.fields.Field.prototype.setExtrasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.turnly.common.v1.Extra=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.common.v1.Extra}
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.addExtras = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.turnly.common.v1.Extra, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.business_data_fields.v1.fields.Field} returns this
 */
proto.turnly.business_data_fields.v1.fields.Field.prototype.clearExtrasList = function() {
  return this.setExtrasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.repeatedFields_ = [1];



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
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.turnly.business_data_fields.v1.fields.Field.toObject, includeInstance),
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
 * @return {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse}
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse;
  return proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse}
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.turnly.business_data_fields.v1.fields.Field;
      reader.readMessage(value,proto.turnly.business_data_fields.v1.fields.Field.deserializeBinaryFromReader);
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
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.turnly.business_data_fields.v1.fields.Field.serializeBinaryToWriter
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
 * repeated Field data = 1;
 * @return {!Array<!proto.turnly.business_data_fields.v1.fields.Field>}
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.turnly.business_data_fields.v1.fields.Field>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.turnly.business_data_fields.v1.fields.Field, 1));
};


/**
 * @param {!Array<!proto.turnly.business_data_fields.v1.fields.Field>} value
 * @return {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse} returns this
*/
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.turnly.business_data_fields.v1.fields.Field=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.business_data_fields.v1.fields.Field}
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.turnly.business_data_fields.v1.fields.Field, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse} returns this
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional turnly.common.v1.Meta meta = 2;
 * @return {?proto.turnly.common.v1.Meta}
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.getMeta = function() {
  return /** @type{?proto.turnly.common.v1.Meta} */ (
    jspb.Message.getWrapperField(this, common_pb.Meta, 2));
};


/**
 * @param {?proto.turnly.common.v1.Meta|undefined} value
 * @return {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse} returns this
*/
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse} returns this
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.business_data_fields.v1.fields.FindCustomerFieldsByServiceResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.turnly.business_data_fields.v1.fields);