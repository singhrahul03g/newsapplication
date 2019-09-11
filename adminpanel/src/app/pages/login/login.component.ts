import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  resdata;
  errmsg;
  constructor(private fb:FormBuilder, private lser:LoginService, private router:Router) { }
  ngOnInit() {
    this.validate()
  }
  Login()
  {
    let formdata=this.myForm.getRawValue();
    this.lser.adminLogin(formdata)
    .subscribe(res=>
      {
        this.resdata=res;
        if(this.resdata.err==0)
        {
          localStorage.setItem('sid',this.resdata.ulogin);
          this.router.navigate(['/dashboard'])
        }
        if(this.resdata.err==1)
        {
          this.errmsg=this.resdata.msg;
        }
      })
  }
  validate()
  {
    this.myForm=this.fb.group(
      {
        'email':['',Validators.required],
        'password':['',Validators.required],
      }
    )
  }
}
