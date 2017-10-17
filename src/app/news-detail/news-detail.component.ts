import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {article_interface} from './../news.service';


@Component({
  templateUrl:'./news-detail.component.html',
  styleUrls:['./news-detail.component.css']
})

export class NewsDetailComponent implements OnInit{
  public newsTitle = ' ';
  constructor(private route:ActivatedRoute){ }

  ngOnInit(){

    // this.newsTitle = this.route.snapshot.params.object;

    this.route.paramMap.subscribe(params=>{
      this.newsTitle = params.get('object');
    });
  }

}
