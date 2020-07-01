import { Component, OnInit } from '@angular/core';
import {TokenServiceService} from '../token-service.service';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  tokenValue: TokenServiceService;
  data : any
  constructor(private token: TokenServiceService) { }

  getToken() {
    

  }

  ngOnInit() {
    this.getToken();
    this.token.getTokenValue().subscribe((arg) => {
      console.log(arg)
      this.data=arg
    });
  }

}
