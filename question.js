class car{
    constructor(color,name,model){
        this.color=color
        this.name=name
        this.model=model
    }

    showinfo(){
        alert(`${this.color} ${this.name} ${this.model}`)
    }
}
let obj = new car ("black","BMW",2022)
obj.showinfo()