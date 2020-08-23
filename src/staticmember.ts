export {};

class Me {
    static isProgramaer: boolean = true;
    static firstName: string = 'Atsushi';
    static lastName: string = 'Ishida'
    static work() {
        return `Hey Hey ${this.firstName}`;
    }
}

let me = new Me();
//console.log(me.isProgramaer);
console.log(Me.isProgramaer);
console.log(Me.work());



