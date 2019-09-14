import { Component, OnInit } from '@angular/core';
import {CatnewsService} from '../../services/catnews.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  resData;
  newsData;
  p: number = 1;
  constructor(private nser:CatnewsService) { }

  


  ngOnInit() {
    this.nser.technologynews()
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
