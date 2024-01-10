class studentInfo{
    constructor (name,lname,marks){
        this.name=name
        this.lname=lname
        this.marks=marks
    }
    show(){
        alert(`${this.name} ${this.lname} ${this.marks}`)
    }
}
let obj =new studentInfo("Jaweriya","Kashif",800)
obj.show();