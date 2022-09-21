import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })
  export class SignupComponent implements OnInit {
    highlightColor="white"
  highlight(color:string){
    this.highlightColor=color
  }
  food=[{name:"pizza",type:"veg"},{name:"burger",type:"veg"},
    {name:"curd",type:"nonveg"},{name:"dhal",type:"nonveg"},
    {name:"lemonrice",type:"nonveg"},{name:"vegbriyani",type:"veg"}]
    constructor() { }
status="line-through"
    toggle(){
      this.status ="none"
    }
    ngOnInit(): void {
    }
  
  }