/* tslint:disable */
import { Specialites } from './specialites';
export interface Responses {
  id?: number;
  nom?: string;
  adresse?: string;
  telephone?: string;
  email?: string;
  disponibilite?: boolean;
  specialite?: Specialites;
  localisation?: string;
  latitude?: number;
  longitude?: number;
}
