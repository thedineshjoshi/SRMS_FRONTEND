import { Component, OnInit } from '@angular/core';
import { studentRegistration } from '../../Model/_studentRegistration.model';
import { ApiCallService } from '../../service/api-call.service';
import { FormBuilder } from '@angular/forms';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  student:studentRegistration = new studentRegistration();
  constructor(private apiservice:ApiCallService) {
    this.student = new studentRegistration();
  }
  Gender: { name: string; code: string; }[] = [];
  Classes: { name: string; code: string; }[] = [];
  messages: any[] = [];
ngOnInit(): void {

  this.Gender=[
    { name: 'Male', code: 'M' },
      { name: 'Female', code: 'F' },
      { name: 'Other', code: 'O' }
  ];
  this.Classes=[
    { name: 'One', code: '1' },
      { name: 'Two', code: '2' },
      { name: 'Three', code: '3' },
      { name: 'Four', code: '4' },
      { name: 'Five', code: '6' },
      { name: 'Six', code: '6' },
      { name: 'Seven', code: '7' },
      { name: 'Eight', code: '8' },
      { name: 'Nine', code: '9' },
      { name: 'Ten', code: '10' },
  ];
}
  



addStudent()
{
let studentData=this.student.studentRegistrationForm.value;
studentData.GradeLevel = studentData.GradeLevel.code;
studentData.Gender = studentData.Gender.code;
studentData
    this.apiservice.postStudent(studentData).subscribe(
      res=>{
        this.student.studentRegistrationForm.reset();
        this.student=new studentRegistration();
        this.messages=[{severity:'success',summary:'Success',detail:'Student Added Successfully'}]
},
err=>{
  this.messages=[{severity:'error',summary:'Error',detail:'Error Occured'}]
  console.log(err);
}
    )
}

}