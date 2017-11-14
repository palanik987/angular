import { Component } from '@angular/core';
import { trigger,transition,query,group,style,animate } from '@angular/animations';

@Component({
  selector: 'news-block',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations:[
  //   trigger('effect', [
  //   query(':enter',
  //         style({
  //           position: 'fixed',
  //           width:'100%',
  //           transform: 'translateX(-100%)'
  //         }),
  //         {optional:true}),
  //       // move page off screen right on leave
  //       query(':leave',
  //         animate('500ms ease',
  //           style({
  //             position: 'fixed',
  //             width:'100%',
  //             transform: 'translateX(100%)'
  //           })
  //         ))
  // ])
  //   ]
  })
export class AppComponent {
  title = 'app';

  getState(state){
    return state.activatedRouteData.animation;
  }
}
