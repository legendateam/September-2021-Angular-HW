import {IComment} from "./comment-details.interface";

export interface ICommentDetails extends IComment{
  postId: number,
  email: string,
  body: string
}
