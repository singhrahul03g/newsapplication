import { Component, OnInit } from '@angular/core';
import { CatnewsService } from 'src/app/services/catnews.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(private nser:CatnewsService) { }
  ngOnInit() {}
}
