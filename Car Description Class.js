class car {
company = "Skoda";
model = "Rapid";
year = 2022

     getdiscription(){
        
        console.log(("This is a "+this.year+" "+ this.company+" "+this.model+" "));
     }
}

let mycar = new car();
mycar.getdiscription()