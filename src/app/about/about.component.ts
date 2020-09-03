import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  clickCounter:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  handleClick(){
    this.clickCounter+=1;
  }

}
