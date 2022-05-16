import { ICommonFields } from './commonFields.interface';

export interface IPost extends ICommonFields{
  userId: number,
  title: string,
  body: string
}
