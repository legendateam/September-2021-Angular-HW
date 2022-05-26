import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services';
import { IUser } from '../../interfaces';
import { StateEnum } from '../../enum';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUser;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usersService: UserService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ id }) => {
      const userOfState = this.router.getCurrentNavigation()?.extras?.state?.[StateEnum.USER] as IUser;

      if (userOfState) {
        this.userDetails = userOfState;
        return;
      }

      this.usersService.getOneById(id).subscribe((user) => this.userDetails = user);
    });
  }
}
