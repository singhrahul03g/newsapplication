import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url="http://localhost:8899/api/";
  constructor(private http:HttpClient) { }
  addpostcategory(data)
  {
    return this.http.post(this.url+"addcategory",data)
  }
  addpostnews(data)
  {
    return this.http.post(this.url+"addnews",data)
  }
  addgetcategory()
  {
    return this.http.get(this.url+"fetchcategory");
  }
  addgetcategorybyid(id)
  {
    return this.http.get(this.url+"fetchcategorybyid/"+id);
  }
  deletegetcategory(id)
  {
    return this.http.get(this.url+"deletecat/"+id);
  }
}
