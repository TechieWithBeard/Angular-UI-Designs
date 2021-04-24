import { Component, OnInit } from '@angular/core';
import { faSearch, faBell,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import * as d3 from "d3";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faSearch=faSearch;
  faBell=faBell;
  faArrowRight = faArrowRight;
  constructor() { }

  ngOnInit(): void {

  }

}
