import {IPost} from "./post.interface";

export interface IPostDetails extends IPost{
  body: string,
  userId: number
}
