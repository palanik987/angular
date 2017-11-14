import { NewsService, article_interface } from './news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent} from './carousal/carousal.component';
import { SpotifyComponent } from './spotify/spotify.component';
// import { OwlModule } from 'angular-owl-carousel';
// import { CarouselModule } from 'angular4-carousel';
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SongKickComponent } from './songkick/songkick.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    NewsDetailComponent,
    NotFoundComponent,
    FormComponent,
    CarouselComponent,
    SpotifyComponent,
    SongKickComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
      {
        path:'home',
        component: HomeComponent
      }, 
      {
        path:'form',
        component: FormComponent
      },
      {
        path:'bbc-news',
        component: NewsComponent
      },
      {
        path:'bbc-news/:object',
        component:NewsDetailComponent
      },
      {
        path:'carousel',
        component : CarouselComponent
      },
      {
        path:'spotify',
        component : SpotifyComponent
      },
      {
        path:'songkick',
        component : SongKickComponent
      },
      {
        path:'',
        // component: HomeComponent
        redirectTo:'/form',
        pathMatch:'full'
      },
      {
        path:'**',
        //component: NotFoundComponent
        redirectTo:'/carousel',
        pathMatch:'full'
      }
    ])
  ],
  providers: [
    NewsService,
    {
      provide: APP_BASE_HREF,
      useValue:'/'
    }
  ],
  bootstrap: [AppComponent, FormComponent]
})
export class AppModule { }