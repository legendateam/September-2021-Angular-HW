import {ICommonFields} from "./common-fields.interface";

export interface IUser extends ICommonFields{
  username: string,
  password: string
}
