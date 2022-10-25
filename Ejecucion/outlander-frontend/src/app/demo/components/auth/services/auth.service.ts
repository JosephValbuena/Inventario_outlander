import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../models/usuario.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string): Promise<any> {
        return this.http
            .get<Usuario>(
                `${environment.backServices.back}/auth/users/login?username=${username}&password=${password}`
            )
            .toPromise();
    }
}
