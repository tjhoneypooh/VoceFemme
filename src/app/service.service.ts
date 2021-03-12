import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  headerText = 'VOCEFEMME';
  underText = '';
  constructor(private httpClient: HttpClient) { }

  ApiUrl = 'http://localhost:3000/twitter';

  public ApiCall() {
     return this.httpClient.get(this.ApiUrl, { responseType: "json" });
  }

  getUser(name: string) {
    return this.httpClient.get(`http://localhost:3000/twitter/userbase/${name}`, { responseType: "json" });
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
