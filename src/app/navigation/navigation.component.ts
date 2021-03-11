import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  updateHeaderDash() {
    this.serviceService.updateHeader("VOCEFEMME", "");
  }

  updateHeaderAbout() {
    this.serviceService.updateHeader("About", "Some text about who we are and what we do.")
  }

}
