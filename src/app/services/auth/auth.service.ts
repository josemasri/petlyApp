import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  servicesURL = environment.SERVICES_URL;
  token: string;

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }

  loginUser(user: any) {
    return this.http.post(`${this.servicesURL}/cuentas/login`, user);
  }

  registerUser(user: any) {
    return this.http.post(`${this.servicesURL}/cuentas/registro`, user);
  }

  setToken(token: string) {
    this.storage.set('token', token);
    this.token = token;
  }

  async getToken() {
    this.token = await this.storage.get('token');
    return this.token;
  }
}
