class Person {
    

    constructor(n = "Unknown" , a = 0){
        this.Name = n;
        this.Age = a;
    }

    getdetails(){
        return this
    }

}

let Person1 = new Person("Mithun" , 20);
console.log(Person1.getdetails());