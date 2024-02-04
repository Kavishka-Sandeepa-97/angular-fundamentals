import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

   private http;
    public isSubmitEnable:boolean=true;

    constructor(private httpclient:HttpClient){
      this.http=httpclient;

    }

    public student={
      firstName:null,
      lastName:null,
      phone:null
    }
    createStudent(){
      this.isSubmitEnable=false;
      this.http.post("http://localhost:8080/save-student",this.student)
      .subscribe((data)=>{
        this.isSubmitEnable=true;
        this.student.firstName=null;
        this.student.lastName=null;
        this.student.phone=null;

      });
    }
}
