import { Component, OnInit } from '@angular/core';

import { IUser } from '../../Interfaces';
import { UserService } from '../../Services';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
    users: IUser[];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getAll().subscribe((value) => this.users = value);
    }
}
