import { Component, OnInit } from '@angular/core';
import { CatnewsService } from 'src/app/services/catnews.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
  newsData;
  constructor(private nser:CatnewsService) { }

  ngOnInit() {
    this.nser.getlatestnews()
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
