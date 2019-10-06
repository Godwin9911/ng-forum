import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { Question, QuestionError } from 'src/app/user/user';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styles: []
})
export class QuestionsFormComponent implements OnInit {
  question: Question;
  errorMessage: string;

  constructor(private questionservice: QuestionService,
              private router: Router) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    if (form.valid) {
      this.questionservice.postquestion(form.value)
        .subscribe({
          next: (data: Question) => {
            if (data.question) {
              this.router.navigate(['/questions']);
            }
          },
          error: (err: QuestionError)  => this.errorMessage = `${err.message}`
        });
    }
  }

  clear(): void{
    this.question = null;
  }
}
