import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  header="Explore !";
  showCS:boolean=false;
  showAN:boolean=false;
  showZO:boolean=false;
  showBO:boolean=false;
  showMB:boolean=false;
  showFS:boolean=false;
  showCH:boolean=false;
  showEL:boolean=false;
  showFD:boolean=false;
  showBT:boolean=false;
  showST:boolean=false;
  showNT:boolean=false;

  srch_flag:boolean=true;
  searchflag:boolean=true;
  srchCSflag:boolean=false;
  prjtDesrcFlag:boolean=false;

  shoSrchCS(){
    this.srch_flag=false;
    this.srchCSflag=true;
  }

  projectName:string="Project Finder";
  projectName2:string="Kass OTT";
  author:string="Auther : Paresh Pandit, Akash Bhosale, Chaitanya Kulkarni";
  author2:string="Auther : Shivam Pawar, Sahil Birnale, Khushi Varma, Aditya Babar";
  Tech:string="Angular";

  showProjectDesc(){
    this.srchCSflag=false;
    this.prjtDesrcFlag=true;
  }



}
