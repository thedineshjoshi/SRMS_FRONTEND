import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { studentRegistration } from "../Model/_studentRegistration.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ApiCallService{
    constructor(private http:HttpClient)
    {}
        postStudent(student:studentRegistration):Observable<any>{
            return this.http.post("http://localhost:5173/api/StudentRegistration/",student,{responseType:'json'})
            
        }
        getStudents(PageNumber:number,PageSize:number):Observable<any>{
            let params = new HttpParams().set('PageNumber',PageNumber.toString()).set('PageSize',PageSize.toString());
            return this.http.get("http://localhost:5173/api/StudentRegistration",{params})
        }
    }
