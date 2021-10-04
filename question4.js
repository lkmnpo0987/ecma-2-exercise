class Employee {
    constructor(name, experience, division) {
        this.name = name
        this.experience = experience;
        this.division = division

    }
    slogan(){
        return `I am ${this.name} my company is best`
    }
    joiningYear(){
        return 2021-this.experience;

    }
    static add(a,b){
        return a+b ;
    }
}
let a = new Employee("Abhi",5,"IT");
console.log(a);
console.log(Employee.add(4,5));
console.log(a.slogan());
console.log(a.joiningYear())