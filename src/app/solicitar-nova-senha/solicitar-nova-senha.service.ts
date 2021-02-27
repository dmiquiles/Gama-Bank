import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { NovaSenha } from '../shared/interfaces/novaSenha.interface';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SolicitarNovaSenhaService {
    API_URL = environment.API_URL;

    constructor(
        private http: HttpClient, 
        private authService: AuthService,
        private router: Router) {}
        
  solicitarNewSenha(novaSenha: NovaSenha) {
            return this.http.post<string>(`${this.API_URL}/nova-senha`, novaSenha)
            .pipe(
              tap((response) => {
                this.authService.setNewsenha(response);
                this.router.navigate(['/esqueci-senha'])
              })
            );
          }
}
