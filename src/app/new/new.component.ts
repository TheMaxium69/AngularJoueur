import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  createShort(nom:string, lastname:string, poste:string){
    this.httpClient.post('http://localhost:8000/apifoot/player/create', {
      name: nom,
      firstName: lastname,
      poste: poste
    }).subscribe(data =>{
      console.log(data);
      this.router.navigate([''])
    })

  }

}
