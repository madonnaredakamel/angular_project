import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonationsserviceService {
  public donnationStatus=localStorage.getItem('donnationStatus')||false
  
  commonApiUrl = "http://localhost:3000"

  constructor(private _http: HttpClient) { }

  Show(donationtype:any):Observable<any>{
    return this._http.get(`${this.commonApiUrl}/showDonations/${donationtype}`)
  }
  

}
