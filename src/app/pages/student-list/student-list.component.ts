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
  public selectedStudent:any;

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
  deleteStudent(){
    //console.log(student);
    this.http.delete("http://localhost:8080/"+this.selectedStudent.id)
    .subscribe((data)=>{
      console.log(data);
      this.loadTable();
    });
  }

  selectStudent(student:any){
      this.selectedStudent=student;
  }

 
  updateStudent(){
    
    this.http.post("http://localhost:8080/save-student",this.selectedStudent)
    .subscribe((data)=>{
      this.loadTable();
  })
  
  }
}
