import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update, get } from '@angular/fire/database';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  ngOnInit(): void {}
  constructor(public database:Database) { }

  feedbacks = [
    {
      name:"Paresh Pandit",
      feedback:"Good Day",
      ID:1
    }
  ]
  
  sub(a:any,b:any,c:any){
   let tem_struct = {
      name:b,
      feedback:c,
      ID:a
      }
    this.feedbacks.push(tem_struct);
    
    set(ref(this.database, 'feedbacks/' + tem_struct.ID ), {
      Name:tem_struct.name,
      Feedback:tem_struct.feedback
    });
    alert("Feedback registered successfully!!!");
  }
}
