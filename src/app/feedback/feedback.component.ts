import { Component, OnInit } from '@angular/core';

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
    
  constructor() { }
  sub(a:any,b:any){
   let tem_struct = {
      name:a,
      feedback:b
      }
    
    this.feedbacks.push(tem_struct);
    
    

  }
  ngOnInit(): void {
  }

}
