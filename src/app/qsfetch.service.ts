import { Injectable, OnInit } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QsfetchService implements OnInit {
  qfetch: Question[] = []

  constructor() {
    fetch('./assets/lpic101qa.json').then(res => res.json())
      .then(jsonData => {
        this.qfetch = jsonData;
      });
  }

  ngOnInit(): void {
    // fetch('./assets/lpic101qa.json').then(res => res.json())
    //   .then(jsonData => {
    //     this.qfetch = jsonData;
    //   });
  }

  getFetchAll(): Question[] {
    // fetch('./assets/lpic101qa.json').then(res => res.json())
    //   .then(jsonData => {
    //     this.qfetch = jsonData;
    //   });
    return this.qfetch
  }
}
