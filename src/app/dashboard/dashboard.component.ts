import { Component, OnInit } from '@angular/core';
import { MatDrawer, matDrawerAnimations } from '@angular/material/sidenav';
import { Data } from '@angular/router';
import { ManageDataService } from '../manage-data.service';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchItems: any = [];
  showFiller = false;
  
  constructor(private serviceService: ServiceService, private manageDataService: ManageDataService) { }

    ngOnInit(): void {
    this.initialSearch();
  }

  initialSearch() {
    this.serviceService.ApiCall().subscribe((data) => {
      this.searchItems = data;
      console.log(data);
    })
  }

  showHistory() {
    let content = document.querySelector('.history') as HTMLElement;
    if (content.style.display == 'none') {
      content.style.display = 'inline-block';
    } else {
      content.style.display = 'none';
    }
  }

  // openMenu() {
  //   let nav = document.querySelector(".toggleNavButton") as HTMLElement;
  //   nav.click();
  // }

  // get menu() {
  //   return this.serviceService.menuBool();
  // }

  searchUser() {
    let search = document.querySelector('.searchInput') as HTMLInputElement;
    let searchValue = search.value;
    this.serviceService.getUser(searchValue).subscribe((data) => {
      this.searchItems = data;
      console.log(data);
    })
  }

  getHandle() {
    this.manageDataService.getHandle('@DollyParton').subscribe((response: Object) => {
      console.log(response);
    })
  }

  addHandle() {
    this.manageDataService.addHandle('@iamacademymi').subscribe((response: any) => {
      console.log(response);
    });
  }

}

