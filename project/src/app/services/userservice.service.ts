import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  public UserStatus=localStorage.getItem('UserStatus')||false
  
  commonApiUrl = "http://localhost:3000"

  constructor(private _http: HttpClient) { }
  
  registerUser(userData:any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}/register`,userData)
  }

  
}
