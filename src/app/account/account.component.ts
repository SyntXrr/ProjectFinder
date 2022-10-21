import { Component, OnInit } from "@angular/core";
import { Database,set,ref,update,onValue } from '@angular/fire/database';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public database:Database) {}   
   ngOnInit(): void {}

  profileWind:boolean=true;
  projectWind:boolean=false;

  projectName:String="";
  projectDescription:String="";
  projectCategory:String="";
    
  showPrfl(){
    this.projectWind=false;
    this.profileWind=true;
  }

  showPrjt(){
    this.profileWind=false;
    this.projectWind=true;
  }

  upload(pname:String,pdesc:String,pcat:string){
    this.projectName=pname;
    this.projectDescription=pdesc;
    this.projectCategory=pcat;
    set(ref(this.database, '/Projetcs'+'/Computer Science'), {
      ProjectName:this.projectName,
      ProjectDescription:this.projectDescription,
      ProjectCategory:this.projectCategory,
      Author:FormComponent.userId
    });
    alert("Project Uploaded Succesfully");
  }
}
