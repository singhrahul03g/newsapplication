import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatnewsService } from 'src/app/services/catnews.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   search;
  constructor(private ar:ActivatedRoute,private nser:CatnewsService) { }

  ngOnInit() {
    this.ar.params.subscribe(par=>
      {
        this.search=par.ser;
        this.nser.getsearch(this.search)
        .subscribe(res=>
          {
            console.log(res);
          })
      })
  }

}
