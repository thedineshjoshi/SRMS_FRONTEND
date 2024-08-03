import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class studentRegistration{
public FirstName:string="";
public MiddleName :string="";
public LastName :string="";
public GradeLevel :string="";
public Address :string="";
public DateOfBirth : Date = new Date();
public Gender :string="";
public GuardianFullName :string="";
public GuardianContactNumber :string="";
public StudentEmailAddress :string="";
public studentRegistrationForm:FormGroup;

constructor(){
    let formBuilder = new FormBuilder();
    this.studentRegistrationForm=formBuilder.group({
        FirstName:new FormControl(''),
        MiddleName:new FormControl(''),
        LastName:new FormControl(''),
        GradeLevel:new FormControl(''),
        Address:new FormControl(''),
        DateOfBirth:new FormControl(''),
        Gender:new FormControl(''),
        GuardianFullName:new FormControl(''),
        GuardianContactNumber:new FormControl(''),
        StudentEmailAddress:new FormControl(''),

    })
}
}