import { Component, OnInit } from '@angular/core';
import { MatDrawer, matDrawerAnimations } from '@angular/material/sidenav';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showContentArea = false;
  searchItems: any = [];
  showFiller = false;
  
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    // this.initialSearch();
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
    let user = document.querySelector('.name') as HTMLInputElement;
    let name = document.querySelector('.username') as HTMLInputElement;
    let searchValue = search.value;
    this.serviceService.getUser(searchValue).subscribe((data: any) => {
      this.showContentArea = true;
      this.searchItems = data.data;
      console.log(this.searchItems[0].name);
      console.log(this.searchItems);
      name.innerText = this.searchItems.data[0].name;
      user.innerText = this.searchItems.data[0].username;
    })

  }

}

