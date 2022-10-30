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

  signup(fnm:String,lnm:String,usr:String,pass:String,cnfpss:String,usrtp:String,clg:string,cls:String){
   if(pass===cnfpss){
    set(ref(this.database,'users/' + usr +'/Profile'), {
      FirstName:fnm,
      LastName:lnm,
      UserID:usr,
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
          this.userId=data.UserID;
          this.College=data.College;
          this.Class=data.Class;
          this.showPrjts();
        }
        else{
          alert("Invalid Credentials");
        }
    });
  }
  
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

  PName:String='';PSumm:String='';PCat:String='';PDes:String='';Pauth:String='';Purl:String='';
  showPrjts(){
    const DB1 = ref(this.database, 'users/' + this.userId  + '/Projects');
    onValue(DB1, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const DB2 = ref(this.database, 'users/' + this.userId  + '/Projects/'+ childKey);
        onValue(DB2, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            if(childSnapshot.key==='Name'){
                  this.PName=  childSnapshot.val();
            }
            if(childSnapshot.key==='Summery'){
              this.PSumm=  childSnapshot.val();
            }
            if(childSnapshot.key==='Description'){
              this.PDes= childSnapshot.val();
            }
            if(childSnapshot.key==='Category'){
              this.PCat= childSnapshot.val();
            }
            if(childSnapshot.key==='Author'){
              this.Pauth= childSnapshot.val();
            }
            if(childSnapshot.key==='URL'){
              this.Purl= childSnapshot.val();
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
  uploadProjects:boolean=false;

  showPrfl(){
    this.projectWind=false;
    this.uploadProjects=false;
    this.profileWind=true;
  }

  showPrjt(){
    this.profileWind=false;
    this.uploadProjects=false;
    this.projectWind=true;
  }
  
  showUpPrjt(){
    this.profileWind=false;
    this.projectWind=false;
    this.uploadProjects=true;
  }

  projectCategory:String="";
  upload(pname:String,psumm:string,pdesc:String,url:string){
    set(ref(this.database, 'Projects/' + this.projectCategory + '/'+ pname), {
      Name:pname,
      Description:pdesc,
      Summery: psumm,
      URL:url,
      Category:this.projectCategory,
      Author:this.Name
    });
    set(ref(this.database, 'users/' + this.userId  + '/Projects/' + pname),{
      Name:pname,
      Description:pdesc,
      Summery: psumm,
      URL:url,
      Category:this.projectCategory,
      Author:this.Name
    });
    alert("Project Uploaded Succesfully");
  } 
}
