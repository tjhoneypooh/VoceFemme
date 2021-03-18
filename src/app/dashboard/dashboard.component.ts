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
  industryTags: any = [];
  lifestyleTags: any = [];
  artTags: any = [];
  allTags: any = [];
  selectedTags: any = [];
  newUserSelectedTags: any = [];
  tags: any = [];
  randomWomen: any = [];
  searchResults: any = [];
  combinedSearchResults: any = [];
  // addedUSer: twitterUser = {}

  
  constructor(private serviceService: ServiceService, private manageDataService: ManageDataService) { }

  ngOnInit(): void {
    this.getTags();
    this.getRandomWomen();
  }

  addTag(tag: string) {
    this.selectedTags.push(tag);
    if (this.selectedTags.length > 3) {
      this.selectedTags.splice(0, 1);
    }
  }
  clearTags() {
    this.selectedTags = [];
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

  selectNewUserTag(tag: string) {
    this.newUserSelectedTags.push(tag);
    if(this.newUserSelectedTags.length > 3) {
      this.newUserSelectedTags.splice(0, 1);
    }
  }

  //Database Items

  getTags() {
    this.serviceService.getDatabaseTags().subscribe((data: any) => {

     for (let i = 0; i < data.length; i++) {
       if (data[i].group_name == 'Arts') {
         this.artTags.push(data[i].tag);
       } else if (data[i].group_name == 'Lifestyle') {
        this.lifestyleTags.push(data[i].tag);
       } else {
        this.industryTags.push(data[i].tag);
       }
     }

     for (let i = 0; i < data.length; i++) {
       this.allTags.push(data[i].tag);
     }
    })
  }

   async getHandlesByTags() {

    for await (let item of this.selectedTags) {
      this.serviceService.getHandlesByTags(item).subscribe(async (data: any) => {
        for await (let item of data) {
          let modData = item.handle.substring(1);

          this.serviceService.getTweetsByUser(modData).subscribe(async(data) => {
            await this.combinedSearchResults.push(data);
          });
        } 
      })
    }
   console.log(this.combinedSearchResults);
  }

  getRandomWomen() {
    this.randomWomen = [];
    this.serviceService.getDatabaseAllWomen().subscribe((data: any) => {
      for (let i = 0; i < 10; i++) {
        let rndNum = Math.floor(Math.random() * data.length);
        let modData = data[rndNum].handle;
        let rndWoman = modData.substring(1);
        this.serviceService.getTweetsByUser(rndWoman).subscribe((data) => {
          this.randomWomen.push(data);
        });
      }
      console.log(this.randomWomen);
    })
  }

  addHandle() {
    let input = document.querySelector('.newHandleInput') as HTMLInputElement;
    let handle = input.value;
    this.serviceService.postNewHandle(handle).subscribe((response: any) => {
      console.log(response);
      //now just need to add tags to each handle. put call?
      //need to clear database out of 'null' things I added in.
    });
  }

}