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
//require("../../helpers/intialise-env-vars");
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const app_1 = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const nock = require("nock");
const uuid = require("uuid");
chai.use(chaiHttp);
describe("Partners Controller", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        return true;
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        return true;
    }));
    describe("CRUD operations", () => {
        mocha_1.it("should get all partners ", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai
                .request(app_1.app)
                .get("/api/v1/partners/all")
                .type("application/json")
                .send();
            chai_1.expect(response.status).to.equal(200);
            chai_1.expect(response.body.data).to.deep.equal([]);
        }));
    });
});
//# sourceMappingURL=partners.controller.spec.js.map