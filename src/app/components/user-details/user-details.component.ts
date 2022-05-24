import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IState, IUser } from '../../interfaces';
import { UserService } from '../../services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUser;

  constructor(private activatedRouter: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ id }) => {
      const { state: { data: user } } = history as IState<IUser>;

      if (!user) {
        this.userService.getOneById(id).subscribe((user) => this.userDetails = user);
        return;
      }

      this.userDetails = user;
    });
  }
}
