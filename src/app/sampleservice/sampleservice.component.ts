import { Component, OnInit } from '@angular/core';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-sampleservice',
  templateUrl: './sampleservice.component.html',
  styleUrls: ['./sampleservice.component.css'],
  providers:[SampleService]
})
export class SampleserviceComponent implements OnInit {
userdetails:any;
  constructor(public sample:SampleService) { }
 getusers(){
  this.sample.getUserDetails().subscribe(res=>{
    console.log("res",res)
    this.userdetails=res.result
  })
 }
increase(){
  this.sample.count ++
}
decrease(){
  this.sample.count --
}
  ngOnInit(): void {
  }

}
