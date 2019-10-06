import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { QuestionsComponent } from './questions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    QuestionsFormComponent,
    AnswerFormComponent,
    QuestionsDetailComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
