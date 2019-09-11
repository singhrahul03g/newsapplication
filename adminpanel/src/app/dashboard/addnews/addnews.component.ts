import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  myForm:FormGroup;
  resData;
  catData;
  myimage;
  constructor(private fb:FormBuilder,private cser:CategoryService) { }
  ci(event)
  {
    if(event.target.files.length>0)
    {
      this.myimage=event.target.files[0];
      console.log(this.myimage);
    }
  }
  addnews()
  {
      let formData=new FormData;
      formData.append('cname',this.myForm.controls.cname.value);
      formData.append('title',this.myForm.controls.title.value);
      formData.append('body',this.myForm.controls.body.value);
      formData.append('Image',this.myimage);
      console.log(formData);
      console.log(this.myForm.controls.title.value)
      this.cser.addpostnews(formData)
      .subscribe(res=>
        {
          console.log(res)
        },err=>
        {
          console.log(err);
        })
  }
  ngOnInit() {
    this.validate();
    this.cser.addgetcategory()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catData=this.resData.cdata;
        }
      })
  }
  validate()
  {
    this.myForm=this.fb.group(
      {
        'cname':['',Validators.required],
        'title':['',Validators.required],
        'body':['',Validators.required],
      }
    )
  }

}
