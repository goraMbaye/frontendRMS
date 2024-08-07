import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseAPI: string = environment.BaseUrl;

  constructor(private http: HttpClient) { }



  getTaskById(id: string ): Observable<any>{
    return this.http.get(`${this.baseAPI}/site-access-request-task/findbyid/${id}`);
  }

  upateTaskByStatus(id: string , status: string): Observable<any>{
    return this.http.put(`${this.baseAPI}/site-access-request-task/update-status/${id}`, {'status': status});
  }

  getTasks(id: string ): Observable<any>{
    return this.http.get(`${this.baseAPI}/site-access-request-task/${id}`);
  }
}
