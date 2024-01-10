// class trainform{
//     registrationForm(){
//         alert("registration complete")
//     }
//     cencilForm(){
//         alert(this.name+"Form has been cancil succesfully ")
//     }
//     info(name){
//     this.name=name
//     }
// }
// let Ahmed = new TrainForm();
// Ahmed.info("Ahmed");
// Ahmed.registrationForm();
// Ahmed.alert();



class trainform{
    registerForm(){
        alert(this.name+" "+this.lname+" "+"registration complete")
    }
    cencilForm(){
        alert(this.name+ " "+this.lname+" "+ "Form has been cancil succesfully ")
    }
    info(firstname,lastname){
    this.name=firstname
    this.lname=lastname
    }
}
let Ahmed = new trainform();
Ahmed.info("Jaweriya","Kashif");
Ahmed.registerForm();
Ahmed.alert();