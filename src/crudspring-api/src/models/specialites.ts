/* tslint:disable */
import { Lieuxes } from './lieuxes';
export interface Specialites {
  id?: number;
  nom?: string;
  patterns?: string;
  lieuxes?: Array<Lieuxes>;
  url_photo?: string;
}
