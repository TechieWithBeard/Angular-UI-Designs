import { Component, OnInit } from '@angular/core';
import { faCoffee,faSignOutAlt,faGlobeEurope,faHome,faAddressCard,faCalendar,faPrint} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faCoffee = faCoffee;
  Logout = faSignOutAlt;
  faHome=faHome
  faAddressCard=faAddressCard
  faCalendar=faCalendar
  faPrint=faPrint
  faGlobeEurope=faGlobeEurope
  constructor() { }

  ngOnInit(): void {

  }

}
