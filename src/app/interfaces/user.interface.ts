import {ICommonFields} from "./common-fields.interface";

export interface IUser extends ICommonFields{
  name: string,
  username: string,
  email: string
}
