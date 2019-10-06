import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question, QuestionError } from 'src/app/user/user';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-questions-detail',
  templateUrl: './questions-detail.component.html',
  styles: []
})
export class QuestionsDetailComponent implements OnInit {
  question: Question;
  errorMessage: string;
  delQuestion: Question;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get firstname(): string {
    return this.authService.currentUser.firstname;
  }

  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      // tslint:disable-next-line: no-string-literal
      this.question = data['question'];
    });
  }

  deleteAnswer(questionId, answerId) {
    this.questionService.deleteAnswer(questionId, answerId).subscribe({
      next: () => {
        this.delQuestion = this.question.answers.filter(answer => answer.answerId !== answerId);
        this.question.answers = this.delQuestion;
      },
      error: (err: QuestionError)  => this.errorMessage = `${err.message}`
    });
  }

}
