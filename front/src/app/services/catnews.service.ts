import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatnewsService {
  url="http://localhost:8899/api/";
  constructor(private http:HttpClient) { }
  getfetchcategory()
  {
  return this.http.get(this.url+"fetchcategory");
  }
  getlatestnews()
  {
    return this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-11&sortBy=publishedAt&apiKey=279979233523403b9e53b4f88a408f70");
  }
  getnewsCategoryBy(id)
  {
    return this.http.get(this.url+"newsbycategory/"+id);
  }
  postfeedback(data)
  {
    return this.http.post(this.url+"feedback",data);
  }
  getsearch(data)
  {
    return this.http.get(this.url+"search/"+data);
  }
}
