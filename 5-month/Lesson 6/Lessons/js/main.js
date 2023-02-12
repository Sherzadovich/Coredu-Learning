//? Object.create()

// const PersonPrototype = {
//     init(name, bithYear) {
//         this.name = name;
//         this.bithYear = bithYear;
//     },

//     calcAge() {
//         return 2023 - this.bithYear;
//     },
// }

// const jay = Object.create(PersonPrototype);
// jay.init("Jay", 2000);

// jay.name = " Jay";
// jay.bithYear = 2000;

// console.log(jay.calcAge());
// console.log(jay);

// const Ibrohim = Object.create(PersonPrototype)

// Ibrohim.init("Ibrohim", 2002);

// console.log(Ibrohim);
// console.log(Ibrohim.calcAge());

//? Inheritence in Object.create()

// const PersonPrototype = {
//     init(name, bithYear) {
//         this.name = name;
//         this.bithYear = bithYear;
//         return this
//     },

//     calcAge() {
//         return 2023 - this.bithYear;
//     },
// }

// const jay = Object.create(PersonPrototype).init("Jay", 2005);

// const StudentPrototype = Object.create(PersonPrototype);

// StudentPrototype.init = function(name, bithYear, course) {
//     PersonPrototype.init.call(this, name, bithYear);
//     this.course = course;
// }

// const harry = Object.create(StudentPrototype)
// harry.init("Harry", 2009, "Math")

// console.log(harry.calcAge());
// console.log(harry);
