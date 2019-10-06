import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Question, QuestionError } from '../user/user';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styles: []
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  errorMessage: QuestionError;

  constructor(private questionservice: QuestionService) { }

  ngOnInit() {
    this.questionservice.getAllquestions()
      .subscribe({
        next: (data: Question[]) => this.questions = data,
        error: (err: QuestionError) => this.errorMessage = err
      });
  }
}
