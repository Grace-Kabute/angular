//step one, create the component
import {Component} from '@angular/core';
//below is a declarator function. it takes in an object as an aurgument.
@Component({
  selector: 'courses',
  template: `
  <h2>{{getTitle() }}</h2>
  <ul>
        <li *ngFor='let course of courses'>
        {{course}}
        </li>
    </ul>
  `
  //in the above,, we use directives to manipulate the dom.
})
// we use backticks around the content in the template to allow use write multile lines

export class CoursesComponent{
  title='list of courses'
  getTitle(){
    return this.title
  }
  courses=[ 'course1','course','course3']
}