import { ICommonFields } from '../../../interfaces/common-fields.interface';

export interface IPost extends ICommonFields{
  userId: number,
  title: string,
  body: string
}
