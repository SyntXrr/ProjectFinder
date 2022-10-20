import { Component, OnInit } from "@angular/core";
import { Database,set,ref,update,onValue } from '@angular/fire/database';
import { UserName } from "../UserName";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent extends UserName implements OnInit {
  
  profileWind:boolean=true;
  projectWind:boolean=false;

  constructor(public database:Database) {
    super();
  }   
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

    projectName:String="";
    projectDescription:String="";
    projectCategory:String="";
    upload(pname:String,pdesc:String,pcat:string){
      this.projectName=pname;
      this.projectDescription=pdesc;
      this.projectCategory=pcat;
      set(ref(this.database, 'users/' + this.ParentUserName), {
        ProjectName:this.projectName,
        ProjectDescription:this.projectDescription,
        ProjectCategory:this.projectCategory,
      });
      alert("Project Uploaded Succesfully");
    }
  }
