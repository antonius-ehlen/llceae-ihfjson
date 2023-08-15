import { Injectable } from '@angular/core';
import { Question } from './question';

import lpic101 from '../assets/lpic101qa.json'

@Injectable({
  providedIn: 'root'
})
export class QsimportService {
  questions: Question[] = []

  constructor() {
    this.questions = lpic101
  }

  getImportAll(): Question[] {
    return this.questions;
  }


}
