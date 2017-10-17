import {Component} from '@angular/core';
import {user} from './../news.service';

@Component({
  templateUrl:'./form.component.html',
  styleUrls:['./form.component.css']
})

export class FormComponent{
userName:string = null;
userCredential:string = null;
flag:number;

  addUser(name,password){
    if(name == undefined || password == undefined || name == "" || password == ""){
     this.flag = 0;
    }
    else{
      this.userName = name;
      this.userCredential = password;
      this.flag = 1;
    }
  }
  reset(){
    
    this.userName=null;
    this.userCredential = null;
    this.flag = 2;
  }

}