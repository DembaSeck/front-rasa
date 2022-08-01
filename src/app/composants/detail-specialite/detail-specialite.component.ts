import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from 'src/app/services/specialite/specialite.service';
import { SpecialiteDto } from 'src/crudspring-api/src/models';

@Component({
  selector: 'app-detail-specialite',
  templateUrl: './detail-specialite.component.html',
  styleUrls: ['./detail-specialite.component.scss']
})
export class DetailSpecialiteComponent implements OnInit {
  p: number = 1;
  listeSpecialite: Array<SpecialiteDto> = [];
  specialiteDto: SpecialiteDto = {};
  totalLength:any;
  page:number = 1;
  constructor(
    private specialiteService: SpecialiteService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.specialiteService.getAll().subscribe(
    data => {
      console.log(data);
      this.listeSpecialite = data;
      this.totalLength = data.length;
    },
    error => console.log(error));
  
  }
}
