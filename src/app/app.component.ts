import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectFinder';
  
  bannerFlag : boolean =true;
  formFlag : boolean =false;

  showbanner(){
    this.bannerFlag=false;
    this.formFlag=true;
  }
  
  showForm(){
    this.bannerFlag=false;
    this.formFlag=true;
  }
}
