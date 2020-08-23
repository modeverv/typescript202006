export {};

namespace Japanese {
  export class Person {
    constructor(public name: string) {}
  }
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstname: string,
      public middlename: string,
      public lastname: string
    ) {}
  }
}

const me = new Japanese.Person('aaaa');
console.log(me.name);

const michael = new English.Person('Michael', 'Joseph', 'Jacson');
console.log(michael.firstname);

const x = new Japanese.Tokyo.Person("aaaa");
