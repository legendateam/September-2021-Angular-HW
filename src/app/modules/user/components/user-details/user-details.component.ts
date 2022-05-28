import { Component, OnInit } from '@angular/core';
import {IUser, IUserDetails} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUserDetails

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ({ userData }) => this.user = userData)
  }

}
