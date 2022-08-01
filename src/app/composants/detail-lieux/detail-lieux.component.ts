import { Component, OnInit } from '@angular/core';
import { LieuxService } from 'src/app/services/lieux/lieux.service';
import { LieuxesDto } from 'src/crudspring-api/src/models';

@Component({
  selector: 'app-detail-lieux',
  templateUrl: './detail-lieux.component.html',
  styleUrls: ['./detail-lieux.component.scss']
})
export class DetailLieuxComponent implements OnInit {
  
  listelieux: Array<LieuxesDto> = [];
  totalLength:any;
  page:number = 1;
  constructor(private lieuxService: LieuxService ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.lieuxService.getAll().subscribe(
    data => {
      console.log(data);
      this.listelieux = data;
      this.totalLength = data.length;
    },
    error => console.log(error));
  
  }

}
