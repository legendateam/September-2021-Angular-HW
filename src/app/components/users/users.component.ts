import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';

import { UserService } from '../../services';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IUser[];

  @Output()
    usersEvent = new EventEmitter<IUser>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((users) => this.users = users);
  }

  emmit(user: IUser) {
    this.usersEvent.emit(user);
  }
}
