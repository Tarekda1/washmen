"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorcode_1 = __importDefault(require("./errorcode"));
const ResponseTemplate = {
    general(data) {
        return data;
    },
    successMessage(message) {
        return {
            success: true,
            message
        };
    },
    /**
     * Returns standard success response
     * @param {*} data
     * @param {String} message
     */
    success(data, message) {
        return {
            success: true,
            message,
            data
        };
    },
    error(message, err, code) {
        return {
            success: false,
            message: message || 'some error occurred',
            error: err || 'error occurred on server, please try again after some time.',
            code: code || errorcode_1.default.InternalServerError
        };
    },
    emptyContent() {
        return ResponseTemplate.error('empty content found', `you must provide valid data and it must not be empty
      ref: http://stackoverflow.com/questions/18419428/what-is-the-minimum-valid-json`, errorcode_1.default.EmptyRequestBody);
    },
    invalidContentType() {
        return ResponseTemplate.error('invalid content type', `you must specify content type and it must be application/json',
      ref: 'http://stackoverflow.com/questions/477816/what-is-the-correct-json-content-type`, errorcode_1.default.InvalidContentType);
    },
    BadRequestFromJoi(err) {
        return ResponseTemplate.error(err.message, err.error, err.code || errorcode_1.default.ValidationFailed);
    },
    routeNotFound(req) {
        return ResponseTemplate.error('api not found', `${req.method} ${req.url}`, errorcode_1.default.RouteNotFound);
    },
};
exports.default = ResponseTemplate;
//# sourceMappingURL=index.js.map