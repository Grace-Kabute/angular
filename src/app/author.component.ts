import { Component } from "@angular/core";
import { AuthorService } from "./author.service";
@ Component({
  selector:'author',
  template:`<h1>3 authors</h1>
  <ul>
  <li *ngFor='let author of authors'>
  {{author}}
  </li>
  </ul>
  `
})

export class AuthorComponent{
 authors:any;
 constructor(Service:AuthorService){
this.authors=Service.getAuthors()
 }
  
}