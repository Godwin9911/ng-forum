import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { QuestionError, Question } from '../user/user';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  private questionUrl = 'api/question';

  postquestion(question: Question): Observable<Question> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Question>(`${this.questionUrl}/postquestion`, question, { headers })
      .pipe(
        // tap( data => console.log(data)),
        catchError(this.handleError)
      );
  }

  postanswer(answer: any): Observable<Question> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Question>(`${this.questionUrl}/postanswer`, answer, { headers })
      .pipe(
         // tap( data => console.log(data)),
        catchError(this.handleError)
      );
  }

  getAllquestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.questionUrl}/allquestions`)
      .pipe(
        // tap( data => console.log(data)),
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line: variable-name
  getquestion(_id: string): Observable<Question> {
    return this.http.get<Question>(`${this.questionUrl}/getquestion/${_id}`)
      .pipe(
        // tap( data => console.log(data)),
        catchError(this.handleError)
      );
  }

  deleteAnswer(questionId: string, answerId: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<Question>(`${this.questionUrl}/deleteanswer/${questionId}/${answerId}`, { headers })
      .pipe(
        // tap(data => console.log('answerId: ' + answerId)),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse ) {
    const dataErr = new QuestionError();
    dataErr.statusText = err.statusText;
    dataErr.message = err.error.message;
    return throwError(dataErr);
  }
}
