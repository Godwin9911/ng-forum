import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { QuestionResolver } from './questions-resolver.service';


const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/:id', component: QuestionsDetailComponent,
                          resolve: { question: QuestionResolver }},
  { path: 'postquestions', component: QuestionsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
