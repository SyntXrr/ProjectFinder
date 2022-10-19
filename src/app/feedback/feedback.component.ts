import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { AppComponent} from '../app.component'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks = [
    {
    name:"Paresh Pandit",
    feedback:"Good Day"
    }
    ]
    
  constructor(public database:Database) {
   }
  sub(a:any,b:any){
   let tem_struct = {
      name:a,
      feedback:b
      }
    
    this.feedbacks.push(tem_struct);
    
    set(ref(this.database, 'feedbacks/' + tem_struct.name ), {
      Name:tem_struct.name,
      Feedback:tem_struct.feedback
    });
    alert("Feedback registered successfully!!!");
    

  }
  ngOnInit(): void {
  }

}
