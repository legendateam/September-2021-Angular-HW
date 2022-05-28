import { environment } from "../../environments/environment";
import {ParamsEnum} from "../enum";

export const { API } = environment;

export const urls = {
  users: `${API}/${ParamsEnum.USERS}`,
  posts: `${API}/${ParamsEnum.POSTS}`,
  comments: `${API}/${ParamsEnum.COMMENTS}`
}
