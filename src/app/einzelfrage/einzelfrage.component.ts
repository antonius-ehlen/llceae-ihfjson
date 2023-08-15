import { Component } from '@angular/core';
import { Question } from '../question';
import { QsimportService } from '../question.service';

@Component({
  selector: 'llceae-einzelfrage',
  templateUrl: './einzelfrage.component.html',
  styleUrls: ['./einzelfrage.component.css'],
})
export class EinzelfrageComponent {
  myquests: Question[] = [];
  query: Question = {
    qid: -1,
    qtext: '',
    qanswers: [],
  };
  currentQuery: number = -1

  constructor(private myqs: QsimportService) {

    this.myquests = this.myqs.getImportAll();
    this.currentQuery = 0
    this.query = this.myquests[this.currentQuery]

    console.log('constr ef: quests', this.myquests)
  }

  first() {
    this.currentQuery = 0
    this.query = this.myquests[this.currentQuery];
  }
  weiterFrage() {
    if (this.currentQuery < this.myquests.length - 1) {
      this.currentQuery++
      this.query = this.myquests[this.currentQuery]
    }
  }
}
