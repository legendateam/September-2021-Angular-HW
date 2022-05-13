import { ICommonFields } from './commonFields.interface';
import { ICompany } from './company.interface';
import { IAddress } from './address.interface';

export interface IUser extends ICommonFields{
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
}
