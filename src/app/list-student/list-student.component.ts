import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../app.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData {
  studentId;
}

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
studentList;
dataSource ;
displayedColumns = ['roll_number','first_name','father_name','mother_name','class','dob','id'];

  constructor( public rest: ApiService, public dialog: MatDialog) {
    
  var student = {
  "fn":"selectAll",
  "params":["students"]
  }
this.rest.getStudents().subscribe((response) => {
    console.log("res KV: ",response);
    this.dataSource = response ;
    this.studentList = response;
});
 }
 openDialog(studentData) {
   console.log("studentData: "+studentData.id);
    const dialogRef = this.dialog.open(DialogContent, {
      data: {
        studentId: studentData.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'delete_dialog.html',
})
export class DialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public rest: ApiService,private router: Router) {}
  deleteStudent(id) {
   console.log("delete : "+id);
   let  studentObj = {"fn": "deleteRowById","params": ["students",id]};
     this.rest.postStudent(studentObj).subscribe((response) => {
       alert("Student deleted.");
       this.rest.getStudents().subscribe((response) => {
    console.log("res KV: ",response);
    
});
       this.router.navigate(['/liststudent']);
    });
  }
}
