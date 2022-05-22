import _ from "lodash";
import { IPartner } from "../models/Partner";
import { IPartnersRepository } from "./PartnersRepository";
import { readJsonFile } from "../../lib/utils";
import { Logger } from "../../lib/LoggerImpl";

export type DataPaging = {
  partners: IPartner[];
  total: number;
  offset: number;
};
export class PatnersService implements IPartnersRepository {

  logger = new Logger();
  radiusOfEarth = 6371;

  async getAll(): Promise<IPartner[] | null> {
    const partnersJsonData: string = await readJsonFile("partners");
    try {
      this.logger.log(JSON.stringify(partnersJsonData));
      const partners: IPartner[] = await JSON.parse(JSON.stringify(partnersJsonData));
      return partners
    } catch (error) {
      throw error;
    }
  }

  async getAllFiltered(rangeInKiloMeters: number, targetCoordinates: number[]): Promise<IPartner[] | null> {
    const partnersJsonData: string = await readJsonFile("partners");
    try {
      const partners: IPartner[] = await JSON.parse(JSON.stringify(partnersJsonData));
      if (rangeInKiloMeters == 0 || _.isEmpty(targetCoordinates)) {
        return partners;
      }
      let filteredPartnersWithinRange: IPartner[] = partners.filter(partner => {
        let [partnerLong, partnerLat] = partner.offices[0].coordinates.split(",");
        let [targetLong, targetLat] = targetCoordinates;
        const radPartnerLong = this.degreeToRadians(Number(partnerLong));
        const radPartnerLat = this.degreeToRadians(Number(partnerLat));
        const radTargetLong = this.degreeToRadians(targetLong);
        const radTargetLat = this.degreeToRadians(targetLat);
        const diffLong = Math.abs(radPartnerLong - radTargetLong);
        const diffLat = Math.abs(radPartnerLat - radTargetLat);
        // let deltaSy = Math.acos((Math.sin(radPartnerLat) * Math.sin(radTargetLat)) +
        //   (Math.cos(radPartnerLong) * Math.cos(radTargetLong)
        //     + Math.cos(Math.abs(radTargetLong - radPartnerLong)))
        // );
        const deltaSy = Math.atan(Math.sqrt((Math.cos(radPartnerLat) * Math.sin(diffLong)) ^ 2 +
          ((Math.cos(radPartnerLong) * Math.sin(radPartnerLat))
            - (Math.sin(radTargetLat) * Math.cos(radPartnerLat) * (diffLong))) ^ 2) /
          ((Math.sin(radPartnerLat) * Math.sin(radTargetLat))
            + (Math.cos(radPartnerLat) * Math.cos(radTargetLat) * Math.cos(diffLat))));
        const distance = this.radiusOfEarth * deltaSy / 1000;
        return distance <= rangeInKiloMeters;
      });
      return filteredPartnersWithinRange
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

  degreeToRadians(angle: number): number {
    let radAngle = angle * Math.PI / 180;
    return radAngle;
  }

}
