import { ICommonFields } from '../../../interfaces';

export interface ICar extends ICommonFields{
  model: string,
  year: number,
  price: number
}
