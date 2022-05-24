import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // обійшов ддос завдяки sessionStorage, якщо користувач вже раз клікав на користувачів, то немає потреби стукатись до апі
    const users = sessionStorage.getItem('users');

    if (users) {
      this.users = JSON.parse(users);
      return;
    }

    this.userService.getAll().subscribe((user) => {
      this.users = user;
      sessionStorage.setItem('users', JSON.stringify(this.users));
    });
  }
}
