import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserModule } from './user/user.module';
import { QuestionsModule } from './questions/questions.module';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    QuestionsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
