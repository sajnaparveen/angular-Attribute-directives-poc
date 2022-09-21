import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status:boolean=true
userName=false

product=[{name:"shampoo",status:"admin",price:10},
{name:"soap",status:"user",price:20},{
  name:"rice",status:"user",price:30
}]
  constructor() { }
name='sajna';
statusInter=true
enable(){
this.status=false
}
setenable(){
  this.statusInter=false
  }
  ngOnInit(): void {
  }

}
