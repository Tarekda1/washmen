//require("../../helpers/intialise-env-vars");
import { expect } from "chai";
import { it } from "mocha";
import { app } from "../../../app";

const chai = require("chai");
const chaiHttp = require("chai-http");


const nock = require("nock");
const uuid = require("uuid");

chai.use(chaiHttp);

describe("Partners Controller", () => {
    beforeEach(async () => {
        return true;
    });

    afterEach(async () => {
        return true;
    });

    describe("CRUD operations", () => {
        it("should get all partners ", async () => {
            const response = await chai
                .request(app)
                .get("/api/v1/partners/all")
                .type("application/json")
                .send();
            const partnersArray = JSON.parse(JSON.stringify(response.body.data));
            expect(response.status).to.equal(200);
            expect(partnersArray.length).to.equal(17);
        });
    });
});
