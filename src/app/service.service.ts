import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  headerText = 'VOCEFEMME';
  underText = '';

  constructor(private http: HttpClient) { }

  ApiUrl = 'http://localhost:3000/twitter';
      
  public ApiCall() {
     return this.http.get(this.ApiUrl, { responseType: "json" });
  }

  getUser(name: string) {

    console.log(name);
    return this.http.get(`http://localhost:3000/twitter/`, { responseType: "json" });
    return this.httpClient.get(`${this.ApiUrl}/userbase/${name}`, { responseType: "json" });
  }

  getTweetsByUser(username: string) {
    return this.httpClient.get(`${this.ApiUrl}/${username}`, { responseType: "json" });
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
