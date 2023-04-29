class Employee {
    name  = "Ayush"
    position = "Software Engineer"
    salary = 80000

    getSalary(){
        return this.salary;
    }
}

let employee1 = new Employee();
 console.log(employee1.getSalary());