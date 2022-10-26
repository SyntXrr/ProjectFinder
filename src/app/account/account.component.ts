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
      pn:'Name',
      ps:'Category',
      pd:'Summery',
      pc:'Descriprion',
      pa:'Author'
    }
  ]
  
  Prdata(pn:any,ps:any,pd:any,pc:any,pa:any){
   let project= {
      pn:pn,
      ps:ps,
      pd:pd,
      pc:pc,
      pa:pa
    }
    this.Projects.push(project);
  }

  PName:String='';PSumm:String='';PCat:String='';PDes:String='';Pauth:String='';

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
          this.showPrjts();
        }
        else{
          alert("Invalid Credentials");
        }
    });
   
  }

  showPrjts(){
    const DB1 = ref(this.database, 'users/' + this.userId  + '/Projects');
    onValue(DB1, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const DB2 = ref(this.database, 'users/' + this.userId  + '/Projects/'+ childKey);
        onValue(DB2, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            if(childSnapshot.key==='Name'){
                  this.PName= childSnapshot.key + " : " + childSnapshot.val();
            }
            if(childSnapshot.key==='Summery'){
              this.PSumm= childSnapshot.key + " : " +childSnapshot.val();
            }
            if(childSnapshot.key==='Description'){
              this.PDes= childSnapshot.key + " : " +childSnapshot.val();
            }
            if(childSnapshot.key==='Category'){
              this.PCat= childSnapshot.key + " : " +childSnapshot.val();
            }
            if(childSnapshot.key==='Author'){
              this.Pauth= childSnapshot.key + " : " +childSnapshot.val();
            }
          });  this.Prdata(this.PName,this.PSumm,this.PDes,this.PCat,this.Pauth);
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
      Name:pname,
      Description:pdesc,
      Summery: psumm,
      Category:this.projectCategory,
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
