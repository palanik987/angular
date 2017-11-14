import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
@Component({
  selector: 'songkick',
  templateUrl: './songkick.component.html',
  styleUrls: ['./songkick.component.css']
})
export class SongKickComponent implements OnInit,AfterViewInit{
  
  constructor(){ }
    
  ngOnInit(){
      var po = document.createElement('script'); 
  po.type = 'text/javascript'; 
  po.async = true;
  po.src = 'https://download.wbr.com/coolaccidents/shopify.js';
  var s = document.getElementById('collection-component-70975470087');
  s.parentNode.insertBefore(po, s);
  }
  ngAfterViewInit(){

  }
}