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
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=e4bd49634b6747809feede23de875ce4");
  }
  sportsnews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e4bd49634b6747809feede23de875ce4");
  }
  sciencenews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=e4bd49634b6747809feede23de875ce4");
  }
  healthnews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=e4bd49634b6747809feede23de875ce4");
  }
  technologynews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e4bd49634b6747809feede23de875ce4");
  }
  businessnews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e4bd49634b6747809feede23de875ce4");
  }
  entertainmentnews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=e4bd49634b6747809feede23de875ce4");
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
