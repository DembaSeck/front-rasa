import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ResponseService } from 'src/app/services/response/response.service';
import { ResponsesDto } from 'src/crudspring-api/src/models';


@Component({
  selector: 'app-page-response',
  templateUrl: './page-response.component.html',
  styleUrls: ['./page-response.component.scss']
})
export class PageResponseComponent implements OnInit {

  listeresponses: Array<ResponsesDto> = [];
  
  constructor(
    private router: Router,
    private responseService: ResponseService
  ) { }

  ngOnInit(): void {
   
    }

    
   getData(){
    this.responseService.getAll().subscribe(
      response =>{
        this.listeresponses= response;
      });
   }
  }

