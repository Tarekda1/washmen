"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const { config } = require("../config/environments/" + process.env.ENV);
const express_winston_1 = __importDefault(require("express-winston"));
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const { createLogger, format, transports } = winston_1.default;
const globals = require("globals");
class Logger {
    constructor() {
        this.logger = createLogger({
            level: config.logLevel,
            format: format.combine(format.timestamp({
                format: "YYYY-MM-DD HH:mm:ss",
            }), format.errors({ stack: true }), format.splat(), format.simple()),
        });
        this.logger.add(new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
        }));
        if (process.env.ENV == "production") {
            this.logger.add(new transports.File({
                level: 'error',
                filename: path_1.default.join(__dirname, path_1.default.sep.toString(), "partners.logs"),
                format: format.combine(format.colorize(), format.simple()),
            }));
        }
    }
    log(level, ...msg) {
        this.logger.log(level, msg);
    }
    getRequestLogger() {
        return express_winston_1.default.logger({
            transports: [new winston_1.default.transports.Console()],
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
            meta: process.env.ENV !== "production",
            msg: "HTTP {{req.method}} {{req.url}}",
            expressFormat: true,
            colorize: false,
            ignoreRoute(req, res) {
                return false;
            },
        });
    }
    getRequestErrorLogger() {
        return express_winston_1.default.errorLogger({
            transports: [new winston_1.default.transports.Console()],
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
        });
    }
}
exports.Logger = Logger;
//# sourceMappingURL=LoggerImpl.js.map