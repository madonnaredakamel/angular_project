import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationsserviceService } from 'src/app/services/donationsservice.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  data:any=[]
  constructor(private _donationService:DonationsserviceService) { }

  ngOnInit(): void {

  }
  Showfood(){
   this._donationService.Show("food").subscribe(response=>{
     this.data=response.data.arr
    console.log(response)}
    
    
    
    
    )
  }
  ShowMoney(){
    this._donationService.Show("money").subscribe(response=>{
      this.data=response
      console.log(this.data.data.arr[0].fname)
     console.log(response)}
      )
   }
   ShowClothes(){
    this._donationService.Show("clothes").subscribe(response=>{
     console.log(response)}
     )
   }
   ShowBlood(){
    this._donationService.Show("blood").subscribe(response=>{
     console.log(response)
     
    }
      )
   }
 
 
 

}
