import { Component, OnInit } from '@angular/core';
import { Database,set,ref,update } from '@angular/fire/database';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Fname:String="";
  Lname:String="";
  Email:String="";
  Uname:String="";
  Password:String="";
  CnfPasswaord:String="";
  Usertype:String="";

  constructor(public database:Database) {
  }

  ngOnInit(): void {
  
  }

    welcomeFlag: boolean = false;
    flagContainer:boolean =true;

  showWel(){
    this.flagContainer=false;
    this.welcomeFlag=true;
  }

signup(fnm:String,lnm:String,eml:String,usrName:String,pass:String,cnfpss:String,usrtp:String){
  this.Fname=fnm;
  this.Lname=lnm;
  this.Email=eml;
  this.Uname=usrName;
  this.Password=pass;
  this.CnfPasswaord=cnfpss;
  this.Usertype=usrtp;
  set(ref(this.database, 'users/' + this.Uname), {
    FirstName:this.Fname,
    LastName:this.Lname,
    UserName:this.Uname,
    Email:this.Email,
    Password:this.Password,
    ConfirmPassword:this.CnfPasswaord,
    UserType:this.Usertype
  });
  alert("Account Created Successfully. Plase Login");
}

}
