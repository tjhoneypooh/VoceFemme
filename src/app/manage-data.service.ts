import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {

  constructor(private DatabaseService: DatabaseService) { }

  addHandle(handle: string) {
    //Send web request to add handle to db//
    return this.DatabaseService.post('/handle', { handle });
  }

  getHandle(handle: string) {
    //Send web request to get handle and taglist from db//
    return this.DatabaseService.get(`handles/${handle}`);
  }

  getTags() {
    //Get list of tag groupings and their tags//
    return this.DatabaseService.get(`tag-groups`);
  }

}

