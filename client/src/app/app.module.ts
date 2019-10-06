import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsModule } from './questions/questions.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    QuestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
