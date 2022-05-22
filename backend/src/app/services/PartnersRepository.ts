import { IPartner } from "../models/Partner";

export interface IPartnersRepository {
  getAllFiltered(rangeInKilo: number, coordinates: []): Promise<IPartner[] | null>;
  getAll(): Promise<IPartner[] | null>;
  getById(id: number): Promise<IPartner | null>;
  add(customer: IPartner, file: any): Promise<IPartner | null>;
  delete(id: number): Promise<boolean | null>;
  update(id: number, expense: IPartner): Promise<IPartner | null>;
}
