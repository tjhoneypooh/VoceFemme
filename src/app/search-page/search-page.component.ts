import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ManageDataService } from '../manage-data.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private manageDataService: ManageDataService) { }

  ngOnInit(): void {
  }

  searchHandle(handle: string) {
    this.manageDataService.getHandle(handle).subscribe((response: any) => {
      const handleData = response;
      console.log(handleData);
    })
  }

}
