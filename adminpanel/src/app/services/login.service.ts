import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   url="http://localhost:8899/api/";
  constructor(private http:HttpClient) { }
    //admin login
    adminLogin(data)
    {
      return this.http.post(this.url+'adminlogin',data);
    }
    changepass(data)
    {
      return this.http.post(this.url+'changeadminpass',data);
    }
}
