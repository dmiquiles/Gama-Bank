import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

import { EsqueciSenha } from './../../shared/interfaces/esqueciSenha.interface';

@Injectable({
  providedIn: 'root',
})
export class EsqueciSenhaService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient, private authService: AuthService) {}

  signin(usuario: EsqueciSenha) {
    const user = this.authService.getUsuario();
    return this.http.post(`${this.API_URL}/altera-senha`, usuario, {
      params: {
        login: user.login,
      },
    });
  }
}
