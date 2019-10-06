import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../user/user';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionResolver implements Resolve<Question> {

  constructor(private questionservice: QuestionService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Question> {
    const id = route.paramMap.get('id');
    return this.questionservice.getquestion(id);
  }
}
