import { Component, OnInit } from '@angular/core';
import { CatnewsService } from 'src/app/services/catnews.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  resData;
  catData;
  constructor(private nser:CatnewsService) { }
  ngOnInit() {
    this.nser.getfetchcategory()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catData=this.resData.cdata;
        }
      })
  }

}
