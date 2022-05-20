import { PatnersService } from "../services/PartnersService";
import { Request, Response } from "express";
import _ from "lodash";
import { ServerException, BadRequestException, NotFoundException } from "../../lib/custom-errors";
import Template from "../global/response";
import APIError from "../global/response/apierror";
import { Logger } from "../../lib/LoggerImpl";
import Joi from "joi";

const expenseService = new PatnersService();
const logger = new Logger();

class PartnersController {
  public static listAll(req: Request, res: Response, next: any) {
    expenseService
      .getAll()
      .then((expenses) => {
        if (!_.isEmpty(expenses)) {
          res.json(
            Template.success(expenses, "Expense retrevied succesfully")
          );
        } else {
          res.json(Template.success([], "No records found"));
        }
      })
      .catch((err) => {
        next(new ServerException("error occured"));
      });
  }



  public static getById(req: Request, res: Response, next: any) {
    expenseService
      .getById(Number(req.params["id"]))
      .then((expense) => {
        if (expense) {
          res.json(
            Template.success(expense, "Expense retrieved succesfully")
          );
        }
        else {
          next(new BadRequestException(`Expense with id: ${req.params["id"]} Not Found`))
        }
      })
      .catch((err) => {
        if (err.ErrorID == 2110) {
          next(new APIError(err.message, err.ErrorID));
        }
        next(new ServerException("error occured"));
      });
  }

  public static async addNew(req: Request | any, res: Response, next: any) {
    throw new Error("not supported operation");
  }

  public static updateExpense(req: Request | any, res: Response, next: any) {
    throw new Error("not supported operation");
  }

  public static async deleteExpense(req: Request, res: Response, next: any) {
    throw new Error("not supported operation");
  }
}

export default PartnersController;
