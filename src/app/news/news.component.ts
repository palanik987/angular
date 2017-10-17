import { article_interface , NewsService } from './../news.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'articles',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  
  public article_instance:article_interface[];
  constructor(private service: NewsService){ }
      
  ngOnInit(){
    this.service.getObjects()
    .subscribe(response =>{
      this.article_instance = response.json().articles;
    });
  }
}