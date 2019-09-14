import { Component, OnInit } from '@angular/core';
import {CatnewsService} from '../../services/catnews.service'
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  resData;
  newsData;
  p: number = 1;
  constructor(private nser:CatnewsService) { }

  


  ngOnInit() {
    this.nser.sciencenews()
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
