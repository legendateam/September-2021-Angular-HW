export interface IState<T> extends History{
  state: { data: T }
}
