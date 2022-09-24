import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { LoginComponent } from './login/login.component';
import { SampleserviceComponent } from './sampleservice/sampleservice.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'data-binding',component:DataBindingDemoComponent},
{path:'signup',component:SignupComponent},
{path:'sample',component:SampleserviceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }