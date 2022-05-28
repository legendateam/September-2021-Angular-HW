import {IAddress, ICompany} from "../../../interfaces";
import {IUser} from "./user.interface";

export interface IUserDetails extends IUser{
  address: IAddress,
  company: ICompany
}
