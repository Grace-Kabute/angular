export class Human{
 
  constructor(private man?:string,private woman?:string){
 
  }
  child(){
  console.log(this.man +' '+ this.woman);
  }
  }
  //class animal
   export class Animal{
    constructor(public _domestic?:string,public _wild?:string){}
    pet(){
      console.log(this._domestic,'or', this._wild);
    }
    //getter
    get wild(){
      return this._wild;
    }// with this, we can access the properties with a private modifier outside the class by calling this function outside.
    //setter
     set wild(value){
      if (value=='cat')
      throw new Error ('this is not found in the wild')
      this._wild=value
    }//with this, we can change the value of the coordinates outside the class.
  }