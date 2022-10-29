import { Component, OnInit } from '@angular/core';
import { Database,set,ref,onValue } from '@angular/fire/database';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(public database:Database) {}  
  ngOnInit(): void {
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

  srchFlag:boolean=true;
  listFlag:boolean=false;
  prjtDesrcFlag:boolean=false;

  showList(catName:String){
    this.srchFlag=false;
    this.listFlag=true;
    this.displayList(catName);
  }

  showProjectDesc(){
    this.listFlag=false;
    this.prjtDesrcFlag=true;
  }

  CatList:String='';
  PName:String='';PSumm:String='';PCat:String='';PDes:String='';Pauth:String='';
  displayList(catName:String){
    this.CatList=catName;
    const DB1 = ref(this.database, 'Projects/' + catName);
    onValue(DB1, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const DB2 = ref(this.database,  'Projects/' + catName + '/' + childKey);
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
  showPrjtDes(){
    this.listFlag=false;
    this.prjtDesrcFlag=true;
  }
}
