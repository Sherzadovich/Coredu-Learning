//? Object.create()

const PersonPrototype = {
    init(name, bithYear) {
        this.name = name;
        this.bithYear = bithYear;
    },

    calcAge() {
        return 2023 - this.bithYear;
    },
}

const jay = Object.create(PersonPrototype);
jay.init("Jay", 2000);

// jay.name = " Jay";
// jay.bithYear = 2000;

console.log(jay.calcAge());
console.log(jay);

const Ibrohim = Object.create(PersonPrototype)

Ibrohim.init("Ibrohim", 2002);

console.log(Ibrohim);
console.log(Ibrohim.calcAge());