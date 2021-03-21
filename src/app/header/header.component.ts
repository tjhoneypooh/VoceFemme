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

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

  get headerText() {
    return this.serviceService.getHeaderText();
  }

  get underText() {
    return this.serviceService.getUnderText();
  }
}
