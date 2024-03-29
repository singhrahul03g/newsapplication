import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatnewsService } from 'src/app/services/catnews.service';

@Component({
  selector: 'app-catnews',
  templateUrl: './catnews.component.html',
  styleUrls: ['./catnews.component.css']
})
export class CatnewsComponent implements OnInit {
  cname;
  resData;
  newsData;
  constructor(private ar:ActivatedRoute,private nser:CatnewsService) { }
  ngOnInit() {
    this.ar.params.subscribe(par=>
      {
        this.cname=par.cn;
        this.nser.getnewsCategoryBy(this.cname)
        .subscribe(res=>
          {
            this.resData=res;
            if(this.resData.err==0)
            {
              this.newsData=this.resData.ndata;
            }
          })
      })
  }

}
