import { Component } from '@angular/core';

import { Question } from '../question';

import { QsimportService } from '../question.service';
import { QshttpService } from '../qshttp.service';
import { QsfetchService } from '../qsfetch.service';

@Component({
  selector: 'llceae-fragenliste',
  templateUrl: './fragenliste.component.html',
  styleUrls: ['./fragenliste.component.css'],
})
export class FragenlisteComponent {
  iquests: Question[] = [];
  hquests: Question[] = [];
  fquests: Question[] = [];

  toggleTrueFalse = false;
  url: string = './assets/lpic101qa.json';
  productsArray: any;

  constructor(
    private qsi: QsimportService,
    private qsh: QshttpService,
    private qsf: QsfetchService
  ) {
    this.qsh.getHttpAll().subscribe(questsh => this.hquests = questsh);
    this.fquests = this.qsf.getFetchAll()
    this.iquests = this.qsi.getImportAll()

    console.log('constr fl: quests', this.iquests)
    console.log('constr fl: hquests', this.hquests)
    console.log('constr fl: fquests', this.fquests)
  }


  toggleAnswer() {
    this.toggleTrueFalse = !this.toggleTrueFalse;
    console.log('ta: per import:', this.iquests);
    console.log('ta: per http  :', this.hquests);
    console.log('ta: per fetch :', this.fquests);
  }
}
