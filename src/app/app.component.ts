import { Component } from '@angular/core';
import {IUser} from "./interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  user: IUser;

  emmit(user: IUser) {
    this.user = user
  }
}
