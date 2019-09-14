import { Component, OnInit } from '@angular/core';
import {CatnewsService} from '../../services/catnews.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  resData;
  newsData;
  p: number = 1;
  constructor(private nser:CatnewsService) { }

  


  ngOnInit() {
    this.nser.healthnews()
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
