import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  URLServicios = environment.SERVICES_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getPerro(id: string) {
      return this.http.get(`${this.URLServicios}/animales/perro/${id}`);
  }
}
