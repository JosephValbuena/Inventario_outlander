import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Usuario } from "../demo/components/models/usuario.model";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }
    
    canActivate(
        next: ActivatedRouteSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let sha = localStorage.getItem('token') || null;
        if (sha === null) {
            this.router.navigate(['/auth/login']);
        }
        let response = false;
        let decodedSha: Usuario = JSON.parse(sha);
        for (let rol of decodedSha.roles) {
            for (let permiso of rol.permisos) {
                if (permiso.nombre === next.data["permissions"][0]) {
                    response = true;
                    return response;
                }
            }
        }
        return response;
    }
}