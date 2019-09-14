import { Component, OnInit } from '@angular/core';
import {CatnewsService} from '../../services/catnews.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  resData;
  newsData;
  p: number = 1;
  constructor(private nser:CatnewsService) { }

  


  ngOnInit() {
    this.nser.businessnews()
    .subscribe(res=>
      {
        this.resData=res;
        // console.log(this.resData);
        if(this.resData.status=="ok")
        {
          this.newsData=this.resData.articles;
          console.log(this.newsData)
          
          

        }
      })
  }

}
