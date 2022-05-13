import {
    Component, Injector, Input, OnInit,
} from '@angular/core';

import { IUser } from '../../Interfaces';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input()
    // @ts-ignore
      user: IUser = {};

  constructor() { }

  ngOnInit(): void {
  }
}
