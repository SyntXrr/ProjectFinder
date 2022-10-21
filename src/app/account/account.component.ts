import { Component, OnInit } from "@angular/core";
import { Database,set,ref,onValue } from '@angular/fire/database';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public database:Database) {}   
   ngOnInit(): void {}

   dashboard:boolean=false;
   form:boolean=true;
   
  Fname:String="";
  Lname:String="";
  Email:String="";
  Uname:String="";
  Password:String="";
  CnfPasswaord:String="";
  Usertype:String="";
  college:string="";
  class:String="";

  router: any;
  
  userId:String="";
  password:String="";

  signup(fnm:String,lnm:String,eml:String,usrName:String,pass:String,cnfpss:String,usrtp:String,clg:string,cls:String){
   if(pass===cnfpss){
    this.Fname=fnm;
    this.Lname=lnm;
    this.Email=eml;
    this.Uname=usrName;
    this.Password=pass;
    this.CnfPasswaord=cnfpss;
    this.Usertype=usrtp;
    this.college=clg;
    this.class=cls;

    set(ref(this.database,'users/' + this.Uname +'/Profile'), {
      FirstName:this.Fname,
      LastName:this.Lname,
      UserName:this.Uname,
      Email:this.Email,
      Password:this.Password,
      UserType:this.Usertype,
      College:this.college,
      Class:this.class
    });
    alert("Account Created Successfully. Plase Login");
  }
  else{alert("Password and Confirm Password Not Match")}
  }

  UserType:String="";
  Name:String="";
  PEmail:String="";
  College:String="";
  Class:String="";

 login(usrId:String,pass:String){
    this.userId=usrId;
    this.password=pass;
    const starCountRef = ref(this.database, 'users/' + this.userId  + '/Profile');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
        if(this.password===data.Password){
          alert("Login Successfull");
          this.form=false;
          this.dashboard=true;
          this.UserType=data.UserType;
          this.Name=data.FirstName+" "+data.LastName;
          this.PEmail=data.Email;
          this.College=data.College;
          this.Class=data.Class;
        }
        else{
          alert("Invalid Credentials");
        }
    });
  }
  
  
  
  ProjectName:String="ProjectFinder";
  ProjectCat:String="Computer Science";
  ProjectSumm:String="Project Showcase for college Student";
  ProjectAuth:String="Kunal kohinkar";

  profileWind:boolean=true;
  projectWind:boolean=false;

  projectName:String="";
  projectDescription:String="";
  projectSummery:String="";
  projectCategory:String="";
    
  showPrfl(){
    this.projectWind=false;
    this.profileWind=true;
  }

  showPrjt(){
    this.profileWind=false;
    this.projectWind=true;
  }

  upload(pname:String,psumm:string,pdesc:String){
    this.projectName=pname;
    this.projectDescription=pdesc;
    this.projectSummery=psumm;
    set(ref(this.database, 'Projects/' + this.projectCategory), {
      ProjectName:this.projectName,
      ProjectDescription:this.projectDescription,
      ProjectSummery: this.projectSummery,
      ProjectCategory:this.projectCategory,
      Author:this.Name
    });
    set(ref(this.database, 'users/' + this.userId  + '/Projects/' + this.projectName),{
      ProjectName:this.projectName,
      ProjectDescription:this.projectDescription,
      ProjectSummery: this.projectSummery,
      ProjectCategory:this.projectCategory,
      Author:this.Name
    });
    alert("Project Uploaded Succesfully");
  }
}
