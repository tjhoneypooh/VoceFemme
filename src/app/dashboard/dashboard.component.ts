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

  showContentArea = false;
  searchItems: any = [];
  showFiller = false;
  tweets: any = [];
  
  constructor(private serviceService: ServiceService, private manageDataService: ManageDataService) { }


  ngOnInit(): void {
    this.getTagGroups();
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

  searchUser() {
    let search = document.querySelector('.searchInput') as HTMLInputElement;
    let searchValue = search.value;
    this.serviceService.getUser(searchValue).subscribe((data: any) => {
      this.showContentArea = true;
      this.searchItems = data.data;
    })
  }

  getTweetsByUser() {
    let search = document.querySelector('.searchInput') as HTMLInputElement;
    let searchValue = search.value;
    this.serviceService.getTweetsByUser(searchValue).subscribe((data: any) => {  
      this.tweets = data;
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
  
  clearSearch() {
    let search = document.querySelector('.searchInput') as HTMLInputElement;
    let searchValue = search.value;

    searchValue = '';
  }

  getTagGroups() {
    this.serviceService.getTagGroups().subscribe((data: any) => {
      console.log(data);
    })
  }

}

