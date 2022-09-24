import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent implements OnInit {

  constructor(public sample:SampleService) { }
  increase(){
    this.sample.count ++
  }
  decrease(){
    this.sample.count --
  }
   name='sajna'
   email='sajna@gmail.com'
   active='inactive'
   actbtn=false
   inactbtn=true
   activebtn(){
 
  this.active='active'

  if( this.active==='active'){
    this.actbtn=true
    this.inactbtn=false
  }else{
    this.actbtn=false
    this.inactbtn=true
  }



   }
   inactivebtn(){
    this.active='inactive'
    if( this.active==='inactive'){
      this.inactbtn=true
      this.actbtn=false
    }else{
      this.actbtn=true
      this.inactbtn=false
    }
    console.log("inactive success")
   }
 
   
 
  ngOnInit(): void {
  }

}
