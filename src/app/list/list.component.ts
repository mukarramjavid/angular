import { Component, OnInit, DebugEventListener } from '@angular/core';
import { MyHttpservicwService } from "../my-httpservicw.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  
  objList:Object;

  constructor(private objSer:MyHttpservicwService) { }

  ngOnInit() {
    this.objSer.myMethod();
    // debugger;
    this.objSer.getProductList().forEach(data=>{
      this.objList=data;
      console.log(this.objList)
    })
  }

}
