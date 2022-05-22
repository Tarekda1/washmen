import { Router } from "express";
import PartnersController from "../app/controllers/PartnersController";

const router = Router();

// Get all partners
router.get("/all", PartnersController.listAll);
router.get("/:id", PartnersController.getById);
router.post("/", PartnersController.addNew);
router.put("/:id", PartnersController.updateExpense);
router.delete("/:id", PartnersController.deleteExpense);

export default router;
