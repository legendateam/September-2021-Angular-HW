import { ICommonFields } from './common-fields.interface';

export interface IComment extends ICommonFields{
  postId: number,
  name: string,
  email: string,
  body: string
}
