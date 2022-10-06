import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api/services';

@Component({
  selector: 'angular-nest-codegen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.apiService.appControllerGetData();
  constructor(private http: HttpClient, private apiService: ApiService) {}
}
