import { PatnersService } from "../services/PartnersService";
import { Request, Response } from "express";
import { ServerException, BadRequestException, NotFoundException } from "../../lib/custom-errors";
import Template from "../global/response";
import APIError from "../global/response/apierror";
import { Logger } from "../../lib/LoggerImpl";
import _ from "lodash";


const partnerService = new PatnersService();
const logger = new Logger();

class PartnersController {
  public static listAll(req: Request, res: Response, next: any) {
    //let range = 2;//range wihin 10 kilo meters
    let coordinates = req.query["coordinates"] as [] || [];//[51.5144636, -0.142571];
    let range = Number(req.query["range"]) || 0;
    partnerService
      .getAllFiltered(range, coordinates)
      .then((partners) => {
        if (!_.isEmpty(partners)) {
          res.json(
            Template.success(partners, "Partners retrevied succesfully")
          );
        } else {
          res.json(Template.success([], "No records found"));
        }
      })
      .catch((err) => {
        logger.log(err);
        next(new ServerException("error occured"));
      });
  }


  public static getById(req: Request, res: Response, next: any) {
    partnerService
      .getById(Number(req.params["id"]))
      .then((partner) => {
        if (partner) {
          res.json(
            Template.success(partner, "Partner retrieved succesfully")
          );
        }
        else {
          next(new BadRequestException(`partner with id: ${req.params["id"]} Not Found`))
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
