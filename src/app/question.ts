export interface Question {
  qid: number;
  qtext: string;
  qanswers: Answer[]
}

export interface Answer {
  atext: string;
  acorrect: boolean
}
