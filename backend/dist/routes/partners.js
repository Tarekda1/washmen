"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PartnersController_1 = __importDefault(require("../app/controllers/PartnersController"));
const router = express_1.Router();
// Get all users
router.get("/all", PartnersController_1.default.listAll);
router.get("/:id", PartnersController_1.default.getById);
router.post("/", PartnersController_1.default.addNew);
router.put("/:id", PartnersController_1.default.updateExpense);
router.delete("/:id", PartnersController_1.default.deleteExpense);
exports.default = router;
//# sourceMappingURL=partners.js.map