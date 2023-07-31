export interface Form {
  _id: string;
  date: string;
  user: string;
  hasDrank: boolean;
  hasPsychotropicDrugs: boolean;
  hasEmotionalProblems: boolean;
}

export interface FileList {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/length) */
  readonly length: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/item) */
  item(index: number): File | null;
  [index: number]: File;
}
