import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QshttpService {
  questions: Question[] = [];

  url: string = '/assets/lpic101qa.json';

  constructor(private http: HttpClient) {
  }


  getHttpAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url)
  }
}
