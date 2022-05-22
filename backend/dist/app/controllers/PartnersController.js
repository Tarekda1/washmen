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
const PartnersService_1 = require("../services/PartnersService");
const custom_errors_1 = require("../../lib/custom-errors");
const response_1 = __importDefault(require("../global/response"));
const apierror_1 = __importDefault(require("../global/response/apierror"));
const LoggerImpl_1 = require("../../lib/LoggerImpl");
const lodash_1 = __importDefault(require("lodash"));
const partnerService = new PartnersService_1.PatnersService();
const logger = new LoggerImpl_1.Logger();
class PartnersController {
    static listAll(req, res, next) {
        let range = 10; //range wihin 10 kilo meters
        let coordinates = [51.5144636, -0.142571];
        partnerService
            .getAllFiltered(range, coordinates)
            .then((partners) => {
            if (!lodash_1.default.isEmpty(partners)) {
                res.json(response_1.default.success(partners, "Partners retrevied succesfully"));
            }
            else {
                res.json(response_1.default.success([], "No records found"));
            }
        })
            .catch((err) => {
            logger.log(err);
            next(new custom_errors_1.ServerException("error occured"));
        });
    }
    static getById(req, res, next) {
        partnerService
            .getById(Number(req.params["id"]))
            .then((partner) => {
            if (partner) {
                res.json(response_1.default.success(partner, "Partner retrieved succesfully"));
            }
            else {
                next(new custom_errors_1.BadRequestException(`partner with id: ${req.params["id"]} Not Found`));
            }
        })
            .catch((err) => {
            if (err.ErrorID == 2110) {
                next(new apierror_1.default(err.message, err.ErrorID));
            }
            next(new custom_errors_1.ServerException("error occured"));
        });
    }
    static addNew(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("not supported operation");
        });
    }
    static updateExpense(req, res, next) {
        throw new Error("not supported operation");
    }
    static deleteExpense(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("not supported operation");
        });
    }
}
exports.default = PartnersController;
//# sourceMappingURL=PartnersController.js.map