
import { ViewportScroller} from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-upbtn',
  templateUrl: './upbtn.component.html',
  styleUrls: ['./upbtn.component.css']
})
export class UpbtnComponent {
  pageYoffset = 0;

  @HostListener('window:scroll', ['$event']) onScroll(event:any){
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }
  scrollup(){
    this.scroll.scrollToPosition([0,0]);

  }

}
