import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {
  private URL:string = "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=210df0bf562b421fa423adb672d14339";
  
  constructor(private http: Http){ }

  getObjects(){
    return this.http.get(this.URL);
  }
}

export interface article_interface{
  author:string;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:string;

}
export interface user{
  name:string;
  password:string;
}