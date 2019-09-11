import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cpass',
  templateUrl: './cpass.component.html',
  styleUrls: ['./cpass.component.css']
})
export class CpassComponent implements OnInit {
 myForm:FormGroup;
 msg;
  constructor(private fb:FormBuilder,private lser:LoginService) { }
  changePass()
  {
    let fData=this.myForm.getRawValue();
    if(fData.np==fData.cp)
    {
      this.lser.changepass({'op':fData.op,'np':fData.np,'uid':localStorage.getItem('sid')})
      .subscribe(res=>
        {
          console.log(res);
        })
    }
    else
    {
      this.msg="New pass and con pass is not same";
    }

  }
  ngOnInit() {
    this.validate();
  }
  validate()
  {
  this.myForm=this.fb.group(
    {
      'op':['',Validators.required],
      'np':['',Validators.required],
      'cp':['',Validators.required],
    }
  )
  }
}
