import { IPartner } from "../models/Partner";
import { IPartnersRepository } from "./PartnersRepository";
import { readJsonFile } from "../../lib/utils";
import _ from "lodash";
import { parentPort } from "worker_threads";
export type DataPaging = {
  partners: IPartner[];
  total: number;
  offset: number;
};
export class PatnersService implements IPartnersRepository {

  async getAll(): Promise<IPartner[] | null> {
    const partnersJsonData: string = await readJsonFile("partners");
    try {
      const partners: IPartner[] = await JSON.parse(partnersJsonData);
      return partners
    } catch (error) {
      throw error;
    }
  }
  async getById(id: number): Promise<IPartner | null> {
    try {
      const partners = await this.getAll();
      if (id == -1) {
        return null;
      }
      const partner: IPartner | undefined = partners?.find((partner: IPartner) => partner.id == id);
      if (partner == undefined) {
        return null;
      }
      return partner;
    } catch (error) {
      throw error;
    }
  }
  async add(partner: IPartner, file: any): Promise<IPartner | null> {
    throw new Error("not supported");
  }

  async update(id: number, expenseParam: IPartner): Promise<IPartner | null> {
    throw new Error("not supported");
  }

  async delete(id: number): Promise<boolean | null> {
    throw new Error("not supported");
  }
}
