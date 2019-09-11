import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   ser;
  constructor(private router:Router) { }
   search()
   {
      if(this.ser!=undefined)
      {
        this.router.navigate(['/search/'+this.ser])
      }
   }
  ngOnInit() {
  }

}
