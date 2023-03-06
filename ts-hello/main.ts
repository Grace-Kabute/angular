import {Human} from './human';
import {Animal} from './human';
 function doSomething(){
  for(var i=0;i<5;i++){
    console.log(i);
  }
  console.log('finally: '+i);
 }
 doSomething()
 //when we decrale a variable using the var keyword, the variable is scoped to the nearest function unlike with the let keyword.
 let count=5
 count=3
 //the above is an error since in ts,you cannot assign a string value to a type number. 
 let a:any; 
 a=1;
 a=true;
 a='hello';  
  enum color{red, green, blue};
let backgroundColor= color.green
//types assertions
var message;
message='hello';
let endWithC = ( < string > message).endsWith('c');
let alternativeWay = (message as string).endsWith('c'); 
//custom types//interfaces
interface Point{
x:number,
y:number
}
let drawPoint=(point:Point)=>{
  //
  }
drawPoint({
   x:1,
   y:2 
})
//inline annotation
let draw=(point:{x:number, y:number})=>{
  //this is inline annotation
  }
  draw({
    x:1,
    y:2 
 }) 
 //cohesion is putting related things together.
  
class Group{
  m:number;
  n:number;
   constructor(m:number,n:number){
this.m=m;
this.n=n;
   }
draw(){
  console.log('m: '+ this.m , 'n: '+this.n);
}

}
let group=new Group(1,2);
group.draw();
//classes,objects,constructors
//the properties that we can see in the intellisense are those whose access modifiers are public.

// the access modifiers allows us to reduce code.as shown below

let animal=new Animal('tamed', 'untamed')
animal.pet()
let wild=animal.wild;
animal._wild='tiger'
console.log(wild);

  let human=new Human('male','female');
  human.child()