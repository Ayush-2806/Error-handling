class User{

    
        constructor(u , p){
            this.Username = u;
            this.password = p;
            
        }
        
        get getpassword(){
           return this.password.replace(/./g,"*");
        }
    
        set setpassword(newpass){
            
            const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm;
            
            
            if(pattern.test(newpass) ){
                this.password = newpass;
            }else{
                console.error("Error : Password must be at least 8 characters long and contains at least one number and one uppercase letter. ");
            }
        }
    }
let user1 = new User("mithun" , "12346")

user1.setpassword = "password123";
console.log(user1.getpassword);
