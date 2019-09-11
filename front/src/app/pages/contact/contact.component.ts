import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CatnewsService } from '../../services/catnews.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder,private nser:CatnewsService) { }
  contactus()
  {
    let fdata=this.myForm.getRawValue();
    console.log(fdata)
    this.nser.postfeedback(fdata)
    .subscribe(res=>
      {
        console.log(res)
      })
  }
  ngOnInit() {
    this.validate()
  }
  validate()
  {
    this.myForm=this.fb.group(
      {
        'name':['',Validators.required],
        'email':['',Validators.required],
        'mobile':['',Validators.required],
        'message':['',Validators.required]
      }
    )
  }
}
