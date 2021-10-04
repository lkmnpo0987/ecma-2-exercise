class Person {
    i = 100;
    constructor(name, id,city ) {
        this.name = name;
        this.id = id;
        this.city = city;

    }
    
    static staticMethod(){
        return "static method has been called"
    }
    static addwith100(n){
        return `addition with 100 is ${n+100}`
    }
    
}
let a = new Person("Abhi",5915,"Haidrabad");

console.log(a);
console.log(Person.addwith100(5))
console.log(Person.staticMethod())


// class employee
class Employee extends Person{
    constructor(name, id,city,experience, division){
        super(name, id,city);
        this.experience = experience;
        this.division = division;

    }
    
    static add(a,b){
        return `addition of two number ${a+b}`
    }
    slogan(){
        return `I am ${this.name} my company is best`
    }
    

}
let b = new Employee("Abhishek",5911,"Banaras",2015,"CSE");
console.log(b);
console.log(b.slogan())
console.log(Employee.addwith100(8));
console.log(Employee.add(3,8));


class Developer extends Employee{
    constructor(name, id,city,experience, division,language){
        super(name, id,city,experience, division);
        this.language = language
    }
}
let c = new Developer("Abhinav",5910,"Gorakhpur",2019,"IT","javaScript");
console.log(c);
console.log(Developer.addwith100(10));
console.log(c.slogan())
console.log(Developer.add(3,10));




