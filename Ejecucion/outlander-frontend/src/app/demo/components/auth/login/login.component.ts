import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [MessageService],
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];    
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthService,
        public layoutService: LayoutService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    showError(): void {
        this.messageService.add({
            severity: 'error',
            summary: 'Error de inicio de sesión',
            detail: 'Credenciales incorrectas'
        });
    }

    login(): void {
        this.authService.login(
            this.loginForm.get('username').value,
            this.loginForm.get('password').value
        ).then((response) => {
            console.log(response);
            if (response.nombre !== '') {
                localStorage.setItem('token', JSON.stringify(response));
                this.router.navigate(['']);
            }
        }).catch(() => {
            this.showError();
        })
    }
}
