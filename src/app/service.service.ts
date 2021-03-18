import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  headerText = 'VOCEFEMME';
  underText = '';
  
  constructor(private http: HttpClient) { }

  ApiUrl = 'http://localhost:8080/twitter';
  databaseUrl = 'http://localhost:8080/db';
      
  public ApiCall() {
     return this.http.get(this.ApiUrl, { responseType: "json" });
  }

  getTagGroups() {
    return this.http.get(`${this.databaseUrl}/tag-groups`,  { responseType: "json" });
  }

  getUser(name: string) {
    return this.http.get(`${this.ApiUrl}/userbase/${name}`, { responseType: "json" });
  }

  getTweetsByUser(username: string) {
    return this.http.get(`${this.ApiUrl}/${username}`, { responseType: "json" });
  }

  updateHeader(text: string, underText: string) {
    this.headerText = text;
    this.underText = underText;
  }
  getHeaderText() {
    return this.headerText;
  }
  getUnderText() {
    return this.underText;
  }

}
