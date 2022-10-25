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
   
  router: any;

  signup(fnm:String,lnm:String,eml:String,pass:String,cnfpss:String,usrtp:String,clg:string,cls:String){
   if(pass===cnfpss){
    set(ref(this.database,'users/' + eml +'/Profile'), {
      FirstName:fnm,
      LastName:lnm,
      Email:eml,
      Password:pass,
      UserType:usrtp,
      College:clg,
      Class:cls
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
  userId:String="";
  password:String="";

  Projects = [
    {
      cv:''
    }
  ]
  
  Prdata(cv:any){
   let project= {
      cv:cv
    }
    this.Projects.push(project);
  }

 login(usrId:String,pass:String){
    this.userId=usrId;
    this.password=pass;
    const DB = ref(this.database, 'users/' + this.userId  + '/Profile');
    onValue(DB, (snapshot) => {
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
    const DB1 = ref(this.database, 'users/' + this.userId  + '/Projects');
    onValue(DB1, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const DB2 = ref(this.database, 'users/' + this.userId  + '/Projects/'+ childKey);
        onValue(DB2, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childKey+ ' : ' +childSnapshot.val();
            this.Prdata(childData);
          });
    }, {
      onlyOnce: true
    });
      });
    }, {
      onlyOnce: true
    });
 }

  profileWind:boolean=true;
  projectWind:boolean=false;

  showPrfl(){
    this.projectWind=false;
    this.profileWind=true;
  }

  showPrjt(){
    this.profileWind=false;
    this.projectWind=true;
  }

  projectCategory:String="";
  upload(pname:String,psumm:string,pdesc:String){
    set(ref(this.database, 'Projects/' + this.projectCategory + '/'+ pname), {
      ProjectName:pname,
      ProjectDescription:pdesc,
      ProjectSummery: psumm,
      ProjectCategory:this.projectCategory,
      Author:this.Name
    });
    set(ref(this.database, 'users/' + this.userId  + '/Projects/' + pname),{
      Name:pname,
      Description:pdesc,
      Summery: psumm,
      Category:this.projectCategory,
      Author:this.Name
    });
    alert("Project Uploaded Succesfully");
  }
}
