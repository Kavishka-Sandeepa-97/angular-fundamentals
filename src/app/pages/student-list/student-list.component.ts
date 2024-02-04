import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  private http;
  public studentList:any=null;
  constructor(private httpX:HttpClient){
      this.http=httpX;
      
  }
  ngOnInit(): void {
   this.loadTable();
  }
  loadTable(){
    this.http.get("http://localhost:8080/get-student-list")
    .subscribe((data)=>{
      this.studentList=data;
    });
  }
}
