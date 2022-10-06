import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api/api.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
