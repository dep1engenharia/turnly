// source: organizations.responses.proto
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
goog.exportSymbol('proto.turnly.business_management.v1.organizations.GetOrganizationResponse', null, global);
goog.exportSymbol('proto.turnly.business_management.v1.organizations.Organization', null, global);
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
proto.turnly.business_management.v1.organizations.Organization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.business_management.v1.organizations.Organization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.business_management.v1.organizations.Organization.displayName = 'proto.turnly.business_management.v1.organizations.Organization';
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
proto.turnly.business_management.v1.organizations.GetOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.business_management.v1.organizations.GetOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.business_management.v1.organizations.GetOrganizationResponse.displayName = 'proto.turnly.business_management.v1.organizations.GetOrganizationResponse';
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
proto.turnly.business_management.v1.organizations.Organization.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.business_management.v1.organizations.Organization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.business_management.v1.organizations.Organization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_management.v1.organizations.Organization.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subdomain: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.turnly.business_management.v1.organizations.Organization}
 */
proto.turnly.business_management.v1.organizations.Organization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.business_management.v1.organizations.Organization;
  return proto.turnly.business_management.v1.organizations.Organization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.business_management.v1.organizations.Organization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.business_management.v1.organizations.Organization}
 */
proto.turnly.business_management.v1.organizations.Organization.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setSubdomain(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
proto.turnly.business_management.v1.organizations.Organization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.business_management.v1.organizations.Organization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.business_management.v1.organizations.Organization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_management.v1.organizations.Organization.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSubdomain();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_management.v1.organizations.Organization} returns this
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_management.v1.organizations.Organization} returns this
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subdomain = 3;
 * @return {string}
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.getSubdomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_management.v1.organizations.Organization} returns this
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.setSubdomain = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.business_management.v1.organizations.Organization} returns this
 */
proto.turnly.business_management.v1.organizations.Organization.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.business_management.v1.organizations.GetOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.turnly.business_management.v1.organizations.Organization.toObject(includeInstance, f),
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
 * @return {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse}
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.business_management.v1.organizations.GetOrganizationResponse;
  return proto.turnly.business_management.v1.organizations.GetOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse}
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.turnly.business_management.v1.organizations.Organization;
      reader.readMessage(value,proto.turnly.business_management.v1.organizations.Organization.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.business_management.v1.organizations.GetOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.turnly.business_management.v1.organizations.Organization.serializeBinaryToWriter
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
 * optional Organization data = 1;
 * @return {?proto.turnly.business_management.v1.organizations.Organization}
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.getData = function() {
  return /** @type{?proto.turnly.business_management.v1.organizations.Organization} */ (
    jspb.Message.getWrapperField(this, proto.turnly.business_management.v1.organizations.Organization, 1));
};


/**
 * @param {?proto.turnly.business_management.v1.organizations.Organization|undefined} value
 * @return {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse} returns this
*/
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse} returns this
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional turnly.common.v1.Meta meta = 2;
 * @return {?proto.turnly.common.v1.Meta}
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.getMeta = function() {
  return /** @type{?proto.turnly.common.v1.Meta} */ (
    jspb.Message.getWrapperField(this, common_pb.Meta, 2));
};


/**
 * @param {?proto.turnly.common.v1.Meta|undefined} value
 * @return {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse} returns this
*/
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.business_management.v1.organizations.GetOrganizationResponse} returns this
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.business_management.v1.organizations.GetOrganizationResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.turnly.business_management.v1.organizations);
