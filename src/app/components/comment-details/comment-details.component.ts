import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IComment, IData } from '../../interfaces';
import { CommentService } from '../../services';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css'],
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private commentService: CommentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  // ddos server
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(({ id }) => {
  //     this.commentService.getOneByID(id).subscribe(comment => this.comment = comment)
  //   })
  // }
  //
  ngOnInit(): void {
    // btn version navigation
    // без ддоса, майже

    // так як це, не через хісторі стейт, або сесіон сторадж, це через ангуляр обєкт роутер
    // і він коли я перехожу на інший ендпоінт, стрирається, тобто ніби я ніколи і не клікав на детейлс,
    // тому завжди на першому кліку буде ддос, а далі норм, но
    // коли я знову буду ходити на інші ендпоінти, юзерс, постс і повернуся сюди, то на 1 входженні буде ддос,
    // а далі норм і так по колу

    this.activatedRoute.params.subscribe(({ id }) => {
    //   const comment = this.router.getCurrentNavigation()?.extras?.state?.['data']; // 1 варіант
      //
      //   if (comment) {
      //     this.comment = comment;
      //     return;
      //   }

      if (this.router.getCurrentNavigation()?.extras) { // 2 варіант
        const { data: comment } = this.router.getCurrentNavigation()?.extras.state as IData<IComment>;

        if (comment) {
          this.comment = comment;
          return;
        }
      }

      this.commentService.getOneByID(id).subscribe((comment) => this.comment = comment);
    });
  }
}
