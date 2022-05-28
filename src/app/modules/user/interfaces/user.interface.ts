import {ICommonFields} from "../../../interfaces";

export interface IUser extends ICommonFields{
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
}
