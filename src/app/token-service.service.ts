import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
 url=""
  getTokenValue()  {
    return this.http.get(this.url);
  }
  constructor(private http: HttpClient) { }
}
