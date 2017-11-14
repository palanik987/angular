import { Component } from '@angular/core';
import {Http,Response,Headers,Request} from '@angular/http';

interface HttpRequestOptions {
  method?: string,
  url: string,
  search?: Object,
  body?: Object,
  headers?: Headers,
}

@Component({
  templateUrl:'./spotify.component.html',
  styleUrls:['./spotify.component.css']
})

export class SpotifyComponent{
  artistId:string = '0du5cEVh5yTK9QJze8zA0C';
  accessToken:string = 'BQCy9ORB7xpONI5KzZDCGAF_a83bzEElErkGDlqUopLXPaUdmH-8jimKtWQZ97ELtWFpf6u_lRYpphE1ijbUweO2N16HPy8lND0uLK7slgsKFz33821Q1QMhAjWaRvkSHpg9k__NAQ';
  tracks:any;

  constructor( private http:Http){}

  getTracks(){
    console.log('In Get Tracks');
    this.getTopTracks(this.artistId,this.accessToken).subscribe(
    data => {
      console.log(data);
      if(data.status == 200 && data.statusText == 'OK'){
        this.tracks= JSON.parse(data.json()).tracks;
      }
    }
    );
  }
  getTopTracks(userId:string, accessToken:string){
        return this.api({
        url:"/artists/"+userId+"/top-tracks?country=US",
        headers:this.getAccessToken(accessToken),
        method:'get'
      });
    }

    private getAccessToken(accessToken:string):any{
        var auth={
            'Authorization': 'Bearer '+ accessToken
        }
        auth['Content-Type'] = 'application/json';
        return auth;
    }

    private api(requestOptions: HttpRequestOptions) {
        return this.http.request(new Request({
            url: 'https://api.spotify.com/v1' + requestOptions.url,
            method: requestOptions.method || 'get',
            body: JSON.stringify(requestOptions.body),
            headers: requestOptions.headers
        }));
    }
}