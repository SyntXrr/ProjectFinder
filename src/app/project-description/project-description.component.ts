import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  @Input() projectName='';
  @Input() projectAuthor='';
  @Input() projectTech='';

}
