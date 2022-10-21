import { Component, OnInit } from '@angular/core';
import { Database,set,ref,onValue, child} from '@angular/fire/database';
import { UserName } from '../UserName';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent extends UserName implements OnInit {
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

  constructor(public database:Database) {
  super();
  }

  ngOnInit(): void {
  
  }


signup(fnm:String,lnm:String,eml:String,usrName:String,pass:String,cnfpss:String,usrtp:String,clg:string,cls:String){
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
    ConfirmPassword:this.CnfPasswaord,
    UserType:this.Usertype,
    College:this.college,
    Class:this.class
  });
  alert("Account Created Successfully. Plase Login");
}

userId:String="";
password:String="";
showAccount(usrId:String,pass:String){
  this.userId=usrId;
  this.password=pass;
  const starCountRef = ref(this.database, 'users/' + this.userId);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
      if(this.password===data.Password){
        alert("Login");
        this.ParentUserName=this.userId;
      }
      else{
        alert("Invalid Credentials");
      }
  });
}

}
