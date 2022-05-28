import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe( ({ usersData }) => this.users = usersData)
  }

}
