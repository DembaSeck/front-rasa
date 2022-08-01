/* tslint:disable */
import { Responses } from './responses';
export interface ResponsesDto {
  id?: number;
  nom?: string;
  adresse?: string;
  telephone?: string;
  email?: string;
  disponibilite?: boolean;
  response?: Responses;
  published_at?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: number;
  updated_at?: number;
  localisation?: string;
  latitude?: number;
  longitude?: number;
}
