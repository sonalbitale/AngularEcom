import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class AdminService {
  public user_url ="http://localhost:3000/user/";
  public product_url="http://localhost:3000/Products/";
  public all_user="http://localhost:3000/user";
  http: any;

  constructor(private apiService : ApiService) { }
  userDashboardData(){
    return this.apiService.get(this.user_url);
  }

  productDashboardData(){
    return this.apiService.get(this.product_url);
  }
  allUser():Observable<any>
  {
    return this.apiService.get(this.all_user);
  }
  addUser(user_dto:any){
    let url="http://localhost:3000/user";
    return this.http.post(url,user_dto);

    // return this.apiService.post(this.user_url,user_dto);

  }

  // get data of individual user
  singleUser(user_id:any){
    return this.apiService.get(this.user_url+user_id)
  }

  // update data of indiviual 
  editUser(user_id:any, user_dto:any):Observable<any>{
    let url="http://localhost:3000/user?id=${user_dto}";

    // return this.apiService.put(this.user_url+user_id,user_dto);
    return this.http.put(url,user_dto);


  }
  deleteUser(user_id:any){
    return this.apiService.delete(this.user_url+user_id);
  }
}
