"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJsonFile = exports.formatDate = void 0;
const fsExtra = require('fs-extra');
const path_1 = __importDefault(require("path"));
const moment_1 = __importDefault(require("moment"));
const formatDate = (date, format = "YYYY-MM-DD") => {
    return moment_1.default(date).format(format);
};
exports.formatDate = formatDate;
const readJsonFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fullPathName = path_1.default.resolve(path_1.default.join("src", "assets", fileName + ".json"));
        const jsonData = yield fsExtra.readJson(fullPathName);
        return jsonData;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.readJsonFile = readJsonFile;
//# sourceMappingURL=utils.js.map