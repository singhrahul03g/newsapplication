import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  myImage;
  myForm:FormGroup;
  constructor(private fb:FormBuilder, private catser:CategoryService) { }
  ci(event)
  {
    if(event.target.files.length>0)
    {
        this.myImage=event.target.files[0];
        console.log(this.myImage)
    }
  }
  ngOnInit() {
    this.validate();
  }
  addcat()
  {
    let formData=new FormData();
    formData.append('cname',this.myForm.controls.cname.value);
    formData.append('description',this.myForm.controls.description.value);
    formData.append('Image',this.myImage);
    this.catser.addpostcategory(formData)
    .subscribe(res=>
      {
        console.log(res);
      })
  }
  validate()
  {
     this.myForm=this.fb.group(
       {
         'cname':['',Validators.required],
         'description':['',Validators.required]
       }
     )
  }

}
