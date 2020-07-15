export {};

// * owner
//    * 所有者
//    * 初期化時に設定できる
//    * 途中で変更できない
//    * 参照できる。
// * secreteNumber
//    * 個人番号
//    * 途中で変更できる
//    * 参照できない

class MyNumberCard {
  /** 所有者 */
  private _owner: string;
  private _secretNumber: number;
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}

let card = new MyNumberCard('はむ', 123455);
//card.owner = 'gge';
console.log(card.secretNumber)
card.secretNumber = 1234
console.log(card);
console.log(card.owner);
