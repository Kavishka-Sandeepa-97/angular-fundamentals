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
    public recentStudent:any;
    
    public student={
      id:null,
      firstName:null,
      lastName:null,
      phone:null
    }
    createStudent(){

      if(this.student.phone==null||this.student.phone==""){
        return;
      }

      this.recentStudent=null;
      this.isSubmitEnable=false;

      this.http.post("http://localhost:8080/save-student",this.student)
      
      .subscribe((data)=>{

        this.recentStudent=data;
        this.isSubmitEnable=true;
        this.student.firstName=null;
        this.student.lastName=null;
        this.student.phone=null;

      });
    }
}
