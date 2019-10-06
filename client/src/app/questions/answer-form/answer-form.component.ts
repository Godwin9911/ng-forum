import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, QuestionError } from 'src/app/user/user';
import { QuestionService } from '../question.service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styles: []
})
export class AnswerFormComponent implements OnInit {
  answer: string;
  // tslint:disable-next-line: variable-name
  _id: string;
  errorMessage: string;

  get isLoggedIn(): boolean {
    return this.authservice.isLoggedIn;
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private questionservice: QuestionService,
              private authservice: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this._id = params.get('id')
    );
  }

  submit(answerform: NgForm) {
    if (answerform.valid) {

      const formData = {
        id: this._id,
        answer: answerform.value.answer,
        userId: this.authservice.currentUser.firstname
      };

      this.questionservice.postanswer(formData)
        .subscribe({
          next: () => this.onSaveComplete(),
          error: (err: QuestionError)  => this.errorMessage = `${err.message}`
        });
    }
  }

  onSaveComplete(): void {
    this.router.navigateByUrl(`/questions`);
  }

  clear(): void {
    this.answer = null;
  }



}
