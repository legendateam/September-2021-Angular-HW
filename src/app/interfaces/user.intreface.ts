import { IAddress } from './address.interface';
import { ICompany } from './company.interface';
import { ICommonFields } from './common-fields.interface';

export interface IUser extends ICommonFields {
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany
}
