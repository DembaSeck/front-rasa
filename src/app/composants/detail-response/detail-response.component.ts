import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response/response.service';
import { ResponsesDto } from 'src/crudspring-api/src/models';

@Component({
  selector: 'app-detail-response',
  templateUrl: './detail-response.component.html',
  styleUrls: ['./detail-response.component.scss']
})
export class DetailResponseComponent implements OnInit {

  listeresponses: Array<ResponsesDto> = [];

  constructor(
    private responseService: ResponseService
  ) { }

  ngOnInit(): void {
  this.getData();
    }
totalLength:any;
page:number = 1;
    
getData(){
  this.responseService.getAll().subscribe(
  data => {
    console.log(data);
    this.listeresponses = data;
    this.totalLength = data.length;
  },
  error => console.log(error));

}



  }

  
    
   
  


