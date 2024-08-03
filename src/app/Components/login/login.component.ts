import { Component, InjectionToken, Input } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Login } from '../../Model/login.model';
import { FormBuilder, FormGroup, FormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import{PasswordModule} from 'primeng/password';
import { CommonModule } from '@angular/common';
import { Message, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CommonModule,
    MessagesModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _authService:AuthService, private _router:Router,private formBuilder:FormBuilder){}
  loginDetails:Login = new Login();
  loginForm:any = FormGroup;
  submitted = false;
  messages: Message[] =[];  
login()
  {
    this._authService.login(this.loginDetails).subscribe(
      res=>{
        let token = res.token;
        if(token)
        {
          window.localStorage.setItem("token",token);
          this.submitted = true;
          this.messages=[{severity:'success',summary:'Success',detail:'Login Successfully'}]
          this._router.navigateByUrl("/home");
        }
      },
      err=>{
        this.messages=[{severity:'error',summary:'Error',detail:'Error Occured'}]
        console.log(err);
      }
    )
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  });
}}