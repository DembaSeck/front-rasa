import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponsesDto } from 'src/crudspring-api/src/models';
import { StrictHttpResponse } from 'src/crudspring-api/src/strict-http-response';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private baseUrl = 'http://localhost:8080/api/responses/all';
  private baseUrl2 = 'http://localhost:8080/api/listProjet';
  private baseUrl1 = 'http://localhost:8080/projets';

  constructor(private http: HttpClient,router :Router) { }


  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createData(info: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/projets`, info);
  }
  
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.patch(`${this.baseUrl1}/${id}`, value,);
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }
  getList(): Observable<any> {
   
    return this.http.get(`${this.baseUrl2}`);
  }

//findAll():Observable<ResponsesDto[]>{
 // return this.responseServise.findAll();
}



