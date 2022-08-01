/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LieuxesDto } from '../models/lieuxes-dto';
import { ResponsesDto } from '../models/responses-dto';
import { SpecialiteDto } from '../models/specialite-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly findAllPath = '/lieuxes/all';
  static readonly savePath = '/lieuxes/create';
  static readonly deletePath = '/lieuxes/delete/{idlieux}';
  static readonly findByIdPath = '/lieuxes/{idlieux}';
  static readonly findByNomPath = '/lieuxes/{nom}';
  static readonly findAll_1Path = '/responses/all';
  static readonly save_1Path = '/responses/create';
  static readonly delete_1Path = '/responses/delete/{idresponse}';
  static readonly findById_1Path = '/responses/{idresponse}';
  static readonly findByNom_1Path = '/responses/{nom}';
  static readonly findAll_2Path = '/specialites/all';
  static readonly delete_2Path = '/specialites/delete/{idspecialite}';
  static readonly findById_2Path = '/specialites/{idspecialite}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<LieuxesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lieuxes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LieuxesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<LieuxesDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<LieuxesDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveResponse(): __Observable<__StrictHttpResponse<LieuxesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/lieuxes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LieuxesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save(): __Observable<LieuxesDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as LieuxesDto)
    );
  }
  deleteResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      //this.rootUrl + `/lieuxes/delete/${idlieux}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete(): __Observable<null> {
    return this.deleteResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findByIdResponse(): __Observable<__StrictHttpResponse<LieuxesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
    //  this.rootUrl + `/lieuxes/${idlieux}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LieuxesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById(): __Observable<LieuxesDto> {
    return this.findByIdResponse().pipe(
      __map(_r => _r.body as LieuxesDto)
    );
  }

  /**
   * @return successful operation
   */
  findByNomResponse(): __Observable<__StrictHttpResponse<LieuxesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
   //   this.rootUrl + `/lieuxes/${nom}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LieuxesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByNom(): __Observable<LieuxesDto> {
    return this.findByNomResponse().pipe(
      __map(_r => _r.body as LieuxesDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<ResponsesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/responses/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResponsesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_1(): __Observable<Array<ResponsesDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<ResponsesDto>)
    );
  }

  /**
   * @return successful operation
   */
  save_1Response(): __Observable<__StrictHttpResponse<ResponsesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/responses/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponsesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_1(): __Observable<ResponsesDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as ResponsesDto)
    );
  }
  delete_1Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
     // this.rootUrl + `/responses/delete/${idresponse}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete_1(): __Observable<null> {
    return this.delete_1Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findById_1Response(): __Observable<__StrictHttpResponse<ResponsesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
     // this.rootUrl + `/responses/${idresponse}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponsesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_1(): __Observable<ResponsesDto> {
    return this.findById_1Response().pipe(
      __map(_r => _r.body as ResponsesDto)
    );
  }

  /**
   * @return successful operation
   */
  findByNom_1Response(): __Observable<__StrictHttpResponse<ResponsesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
    //  this.rootUrl + `/responses/${nom}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponsesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByNom_1(): __Observable<ResponsesDto> {
    return this.findByNom_1Response().pipe(
      __map(_r => _r.body as ResponsesDto)
    );
  }

  /**
   * cette methode permet d'afficher la liste des specialite
   * @return la liste des specialite/liste vides
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<SpecialiteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/specialites/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SpecialiteDto>>;
      })
    );
  }
  /**
   * cette methode permet d'afficher la liste des specialite
   * @return la liste des specialite/liste vides
   */
  findAll_2(): __Observable<Array<SpecialiteDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<SpecialiteDto>)
    );
  }

  /**
   * cette methode permet de Supprimer une specialite
   * @return l'objet specialite a été supprimer de la BDD
   */
  delete_2Response(): __Observable<__StrictHttpResponse<SpecialiteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
   //   this.rootUrl + `/specialites/delete/${idspecialite}`,
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
   * cette methode permet de Supprimer une specialite
   * @return l'objet specialite a été supprimer de la BDD
   */
  delete_2(): __Observable<SpecialiteDto> {
    return this.delete_2Response().pipe(
      __map(_r => _r.body as SpecialiteDto)
    );
  }

  /**
   * cette methode permet de rechercher une specialite par son id
   * @return l'objet specialite a été trouvé dans la BDD
   */
  findById_2Response(): __Observable<__StrictHttpResponse<SpecialiteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      //this.rootUrl + `/specialites/${idspecialite}`,
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
   * cette methode permet de rechercher une specialite par son id
   * @return l'objet specialite a été trouvé dans la BDD
   */
  findById_2(): __Observable<SpecialiteDto> {
    return this.findById_2Response().pipe(
      __map(_r => _r.body as SpecialiteDto)
    );
  }
}

module ApiService {
}

export { ApiService }
