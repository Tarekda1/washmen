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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatnersService = void 0;
const utils_1 = require("../../lib/utils");
const LoggerImpl_1 = require("../../lib/LoggerImpl");
class PatnersService {
    constructor() {
        this.logger = new LoggerImpl_1.Logger();
        this.radiusOfEarth = 6371;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const partnersJsonData = yield utils_1.readJsonFile("partners");
            try {
                this.logger.log(JSON.stringify(partnersJsonData));
                const partners = yield JSON.parse(JSON.stringify(partnersJsonData));
                return partners;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllFiltered(rangeInKiloMeters, targetCoordinates) {
        return __awaiter(this, void 0, void 0, function* () {
            const partnersJsonData = yield utils_1.readJsonFile("partners");
            try {
                const partners = yield JSON.parse(JSON.stringify(partnersJsonData));
                partners.filter(partner => {
                    let [partnerLong, partnerLat] = partner.office[0].coordinates;
                    let [targetLong, targetLat] = targetCoordinates;
                    const radPartnerLong = this.degreeToRadians(partnerLong);
                    const radPartnerLat = this.degreeToRadians(partnerLat);
                    const radTargetLong = this.degreeToRadians(targetLong);
                    const radTargetLat = this.degreeToRadians(targetLat);
                    let deltaSy = Math.acos((Math.sin(radPartnerLat) * Math.sin(radTargetLat)) +
                        (Math.cos(radPartnerLong) * Math.cos(radTargetLong)
                            + Math.cos(Math.abs(radTargetLong - radPartnerLong))));
                    let distance = this.radiusOfEarth * deltaSy;
                    return distance <= rangeInKiloMeters;
                });
                return partners;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const partners = yield this.getAll();
                if (id == -1) {
                    return null;
                }
                const partner = partners === null || partners === void 0 ? void 0 : partners.find((partner) => partner.id == id);
                if (partner == undefined) {
                    return null;
                }
                return partner;
            }
            catch (error) {
                throw error;
            }
        });
    }
    add(partner, file) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("not supported");
        });
    }
    update(id, expenseParam) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("not supported");
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("not supported");
        });
    }
    degreeToRadians(angle) {
        let radAngle = angle * Math.PI / 180;
        return radAngle;
    }
}
exports.PatnersService = PatnersService;
//# sourceMappingURL=PartnersService.js.map