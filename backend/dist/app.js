"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const params = require("strong-params");
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const LoggerImpl_1 = require("./lib/LoggerImpl");
const error_handler_1 = require("./middlewares/error.handler");
const index_1 = require("./routes/index");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const globals = require("globals");
//set base dir
globals.__baseDir = __dirname;
console.log("global", globals.__baseDir);
const app = express_1.default();
exports.app = app;
const logger = new LoggerImpl_1.Logger();
app.use(helmet_1.default());
app.use(compression_1.default());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb" }));
app.use(params.expressMiddleware());
app.use(logger.getRequestLogger());
app.use("/api", index_1.routes);
app.get("/health", (req, res) => res.json({ status: true, message: "Health OK!" }));
app.use(logger.getRequestErrorLogger());
app.use((req, res, next) => {
    const err = new Error(constants_1.NOT_FOUND_STATUS_MESSAGE);
    res.statusCode = constants_1.NOT_FOUND_STATUS_CODE;
    res.send(err.message);
});
app.use(error_handler_1.middlewares.handleRequestError);
//# sourceMappingURL=app.js.map