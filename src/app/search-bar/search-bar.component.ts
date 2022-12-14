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
      pc:'Category',
      ps:'Summery',
      pa:'Author',
    }
  ]
  
  Prdata(pn:any,ps:any,pc:any,pa:any){
   let project= {
      pn:pn,
      ps:ps,
      pc:pc,
      pa:pa,
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
  PName:String='';PSumm:String='';PCat:String='';Pauth:String='';
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
                  this.PName=childSnapshot.val();
            }
            if(childSnapshot.key==='Summery'){
              this.PSumm= childSnapshot.val();
            }
            if(childSnapshot.key==='Category'){
              this.PCat = childSnapshot.val();
            }
            if(childSnapshot.key==='Author'){
              this.Pauth= childSnapshot.val();
            }
          });  this.Prdata(this.PName,this.PSumm,this.PCat,this.Pauth);
    }, {
      onlyOnce: true
    });
      });
    }, {
      onlyOnce: true
    });
  }

  ProjectName:String="";
  ProjectCategory:String="";
  ProjectSummery:String="";
  ProjectDescription:String="";
  ProjectAuthor:String="";
  ProjectURL:String='';
  UserID:String=''
  showPrjtDes(prname:any,pcat:any){
    this.ProjectName=prname
    this.listFlag=false;
    this.prjtDesrcFlag=true;
    const DB1 = ref(this.database, 'Projects/' + pcat +'/' + prname);
    onValue(DB1, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        if(childSnapshot.key==='Name'){
          this.ProjectName = childSnapshot.val();
        }
        if(childSnapshot.key==='Summery'){
          this.ProjectSummery= childSnapshot.val();
        }
        if(childSnapshot.key==='Description'){
          this.ProjectDescription= childSnapshot.val();
        }
        if(childSnapshot.key==='Category'){
          this.ProjectCategory= childSnapshot.val();
        }
        if(childSnapshot.key==='Author'){
          this.ProjectAuthor= childSnapshot.val();
        }
        if(childSnapshot.key==='URL'){
          this.ProjectURL= childSnapshot.val();
        }
        if(childSnapshot.key==='UserID'){
          this.UserID= childSnapshot.val();
        }
      }); 
    }, {
    onlyOnce: true
  });
  }
  
  comment(cname:any,ccomment:any){
    set(ref(this.database, 'Projects/'+ this.ProjectCategory  +'/'+ this.ProjectName + '/Comments/' + cname),{
        Comment:ccomment
    });
    set(ref(this.database, 'users/'+ this.UserID  + '/Projects/' + this.ProjectName + '/Comments/' + cname),{
      Comment:ccomment
  });
    alert('Comment Successfully');
  }
}
