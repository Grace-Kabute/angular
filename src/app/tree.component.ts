import {Component} from '@angular/core'
//create a declarator function
@Component({
  selector:'plant',
  template:`<h3>This is a tree class</h3>
<h4>{{title}}</h4>
<ul>
<li
*ngFor='let part of parts'>
{{part}}
</li>
</ul>
  `
})

export class TreeComponent{
  title='tree!'
  parts=['leaves','fruits','stem','roots']

}
