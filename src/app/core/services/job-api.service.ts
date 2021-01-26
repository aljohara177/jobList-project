import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationModel, Job } from 'src/app/core/model/application.model';

@Injectable({
  providedIn: 'root'
})
export class JobApiService {
  private readonly resourceUrl: string;
  private readonly baseUrl: string;

  constructor(private $http: HttpClient) {
    this.baseUrl = 'https://de8019bf-ff30-422e-82ea-9a311f417cd5.mock.pstmn.io';
  }

  getJobs(): Observable<Job[]> {
    return this.$http.get<Job[]>(`${this.baseUrl}/jobs`);
  }

  postApplication(application: ApplicationModel): Observable<any> {
    return this.$http.post<any>(`${this.baseUrl}/post`, application);
  }
}
