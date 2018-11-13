import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  listFormations;

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/formations")
      .subscribe(data=>{
      this.listFormations._embedded.etudiants.push(data);
    },err=>{
        console.log(err);
        }

      );
  }

}
