import { Component, OnInit } from '@angular/core';

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
  constructor() {
  }

  ngOnInit(): void {
  
  }
    welcomeFlag: boolean =false;
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
}

}
