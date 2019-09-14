import { Component, OnInit } from '@angular/core';
import {CatnewsService} from '../../services/catnews.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  resData;
  newsData;
  p: number = 1;
  constructor(private nser:CatnewsService) { }

  


  ngOnInit() {
    this.nser.sportsnews()
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
