import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    
  }

  openMenu() {
    console.log("open menu");
  }

  get headerText() {
    return this.serviceService.getHeaderText();
  }

  get underText() {
    return this.serviceService.getUnderText();
  }
}
