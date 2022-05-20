import { Request, Response, Router } from "express";
import partners from "./partners";

const routes = Router();

routes.use("/v1/partners", partners);

export { routes };
