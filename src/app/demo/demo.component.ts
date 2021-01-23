import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'angular-store';

  items = ['Javier', 'Robinson', 'Jose', 'Darianny'];

  objeto = {};

  power = 10;

  

  addElement() {
    this.items.push('New element');
  }

  deleteElement(index : number) {
    this.items.splice(index, 1);
  }


}
