import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-projects',
  templateUrl: './trending-projects.component.html',
  styleUrls: ['./trending-projects.component.css']
})
export class TrendingProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header="Trending Projects";
}
