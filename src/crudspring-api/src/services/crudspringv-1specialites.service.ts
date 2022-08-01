/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SpecialiteDto } from '../models/specialite-dto';
@Injectable({
  providedIn: 'root',
})
class Crudspringv1specialitesService extends __BaseService {
  static readonly savePath = '/crudspring/v1/specialites/create';
  static readonly findByNomPath = '/specialites/{nom}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * cette methode permet d'enregistrer ou modifier une specialite
   * @param body undefined
   * @return l'objet specialite crée / modifier
   */
  saveResponse(body?: SpecialiteDto): __Observable<__StrictHttpResponse<SpecialiteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/crudspring/v1/specialites/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SpecialiteDto>;
      })
    );
  }
  /**
   * cette methode permet d'enregistrer ou modifier une specialite
   * @param body undefined
   * @return l'objet specialite crée / modifier
   */
  save(body?: SpecialiteDto): __Observable<SpecialiteDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as SpecialiteDto)
    );
  }

  /**
   * cette methode permet de rechercher une specialite par son nom
   * @param nom undefined
   * @return l'objet specialite a été trouvé dans la BDD
   */
  findByNomResponse(nom: string): __Observable<__StrictHttpResponse<SpecialiteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/specialites/${nom}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SpecialiteDto>;
      })
    );
  }
  /**
   * cette methode permet de rechercher une specialite par son nom
   * @param nom undefined
   * @return l'objet specialite a été trouvé dans la BDD
   */
  findByNom(nom: string): __Observable<SpecialiteDto> {
    return this.findByNomResponse(nom).pipe(
      __map(_r => _r.body as SpecialiteDto)
    );
  }
}

module Crudspringv1specialitesService {
}

export { Crudspringv1specialitesService }
