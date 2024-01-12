// class school{
//     Registration(){
//         console.log("Registration form");
//     }
//     Fees(){
//         console.log("Fees registered");
//     }
//     Exam (){
//         console.log("Exam on time");
//     }
// }
// class bording extends school{
//       Registration(){
//         super.Registration()
//         console.log("hello");

//       }
// }

// let obj1 = new bording()
// obj1 .Fees();
// obj1.Registration(); 
// obj1.Exam();
// obj1.Registration();

// class complex{
//     constructor(img,real){
//         this.imaginary=img
//         this.real=real;
//     }
//     add(num){
//         this.imaginary=num.imaginary+this.imaginary
//         this.real = num.real+this.real;
//         console.log(`${this.imaginary}i ${this.real}`);
//     }
// }
// let a = new complex(2,8)
// let b = new complex(3,2)
// a.add(b)

class Brands{
     Binsaeed(){
        console.log("first brand");
    }
    Asimjofa(){
        console.log("2nd brand");
    }
    Juneedjamsheed (){
        console.log("3rd brand");
    }
}
class fabric extends Brands{
      Binsaeed(){
        super.Binsaeed()
        console.log("Cotton");

      }
}

let obj1 = new fabric()
obj1 .Binsaeed();
obj1.Juneedjamsheed(); 
obj1.Asimjofa()
obj1.Binsaeed();
