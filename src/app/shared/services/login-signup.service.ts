import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
public login_url ="http://localhost:3000"
public reg_url ="http://localhost:3000/user"
  constructor(private http: HttpClient,private apiservice: ApiService) { }

  authLogin(user_name : any,password:any):Observable<any>{
    return this.apiservice.get(this.login_url+'/user?email='+user_name+'&password='+password);
  }

  userRegister(user_dto:any):Observable<any>
  {
    // return this.apiservice.post(this.reg_url+'/user',user_dto)
    return this.http.post<any>(this.reg_url, user_dto)
  }
  adminLogin(user_name : any,password:any):Observable<any>{
    return this.apiservice.get(this.login_url+'/user?email='+user_name+'&password='+password+'&role=admin');
  }
}
