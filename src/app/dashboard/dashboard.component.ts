import { Component, OnInit } from '@angular/core';
import { MatDrawer, matDrawerAnimations } from '@angular/material/sidenav';
import { Data } from '@angular/router';
import { ManageDataService } from '../manage-data.service';
import { ServiceService } from '../service.service';
import { twitterUser } from '../twitterUser';

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
  industryTags: any = ["Business", "Science", "Technology"];
  lifestyleTags: any = ["Beauty", "Health", "Politics", "Food", "Spiritual"];
  artTags: any = ["Humor", "Music"];
  allTags: any = ["Business", "Science", "Technology","Beauty", "Health", "Politics", "Food", "Spiritual", "Humor", "Music"];
  selectedTags: any = [];
  // addedUSer: twitterUser = {}

  
  constructor(private serviceService: ServiceService, private manageDataService: ManageDataService) { }

  ngOnInit(): void {
  
  }

  addTag(tag: string) {
    this.selectedTags.push(tag);
    console.log(this.selectedTags);
  }
  clearTags() {
    this.selectedTags = [];
  }

  submitTag(tag: string) {
    this.selectedTags.push(tag);
    console.log(this.selectedTags);
  }
  clearSubmitUser() {

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
    this.serviceService.getUser(searchValue).subscribe((data: any) => {
      this.showContentArea = true;
      this.searchItems = data.data;
    })
  }

  getTweetsByUser() {
    let search = document.querySelector('.searchInput') as HTMLInputElement;
    let searchValue = search.value;
    this.serviceService.getTweetsByUser(searchValue).subscribe((data: any) => {  
      console.log(data);
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

}

