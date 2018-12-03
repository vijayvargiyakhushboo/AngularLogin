import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,Validators} from '@angular/forms';
import { ApiService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { CLASSES } from '../class';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
    studentData: any = {};
    studentId;
	private sub: any;
    editStudentData;
    classData = CLASSES ;

  constructor(public rest: ApiService,private route:  ActivatedRoute,private router: Router) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
        let studentObj = {"fn": "selectAllById","params": ["students",['id'],[params['id']]]};
        this.rest.getStudentsById(studentObj).subscribe((response) => {
        console.log("edit stud response: "+(response[0]['dob']));
        let dateOld: Date = new Date(response[0]['dob']);
        console.log("kk: "+dateOld);
        console.log("data: ",response);
        this.editStudentData = response;
        this.studentId = params['id'];
        });
  	});
  }

   submitEditStudent(form: NgForm) {
    if(form.invalid){
    return;
    }
    console.log("edit form :",form);
    let keys = Object.keys(form.controls);
    //form.value.dob = (form.value.dob).toString();
    let values = Object.values(form.value);
    //let classValue = Object.values(form.value.class) ;
    console.log("keys: ",keys);
    console.log("values: ",values);
    let editStudentObj;
    keys.push('roll_number');
    editStudentObj = {"fn": "update","params":["students",keys,values,'id',this.studentId]};
    this.rest.postEditStudent(editStudentObj).subscribe((response) => {
    alert("Student updated.");
    this.router.navigate(['/liststudent']);
    });
}

goto(){
  this.router.navigate(['/liststudent']);
}

}
