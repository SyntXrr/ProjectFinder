import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  profileWind:boolean=true;
  projectWind:boolean=false;
  constructor() {}
    ngOnInit(): void {
    }

    showPrfl(){
      this.projectWind=false;
      this.profileWind=true;
    }
    showPrjt(){
      this.profileWind=false;
      this.projectWind=true;
    }
  }
