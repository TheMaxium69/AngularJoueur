import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.findAll()
    console.log(this.lesPlayers)
  }

  lesShortsTest = [
  ];

  lesPlayers:any = [];

  findAll(){
    this.httpClient.get('http://localhost:8000/apifoot/players')
      .subscribe(LesShortsReponse => {
        this.lesPlayers = LesShortsReponse;
      });
  }

  suppr(id:number){
    this.httpClient.delete('http://localhost:8000/apifoot/player/delete/'+id).subscribe(data => {
      console.log(data);
      this.findAll();
    });
  }

}
