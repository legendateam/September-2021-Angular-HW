import { MyKey } from '../types';

export interface IState<T> {
  data: Record<MyKey, T>
}
