import {ErrorEnum} from "../enum";
import {IError} from "../interfaces";

export const errorValidations: IError = {
  [ErrorEnum.NO_SAME]: 'password and confirm password do not match',
  [ErrorEnum.NOT_AUTHORIZED]: 'not Authorized',
  [ErrorEnum.ERROR]: 'some error',
  [ErrorEnum.IDENTICAL]: 'password can`t be identical username'
}
