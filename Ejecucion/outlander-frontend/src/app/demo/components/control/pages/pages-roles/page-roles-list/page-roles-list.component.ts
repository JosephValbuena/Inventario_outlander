import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Rol } from 'src/app/demo/components/models/rol.model';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-page-roles-list',
  templateUrl: './page-roles-list.component.html',
  styleUrls: ['./page-roles-list.component.scss'],
  providers: [MessageService]
})
export class PageRolesListComponent implements OnInit {

  roles: Rol[] = null;

  constructor(
    private router: Router,
    private rolesService: RolesService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.obtenerTodosLosRoles();
  }

  public obtenerTodosLosRoles():void {
    this.rolesService.obtenerTodosLosRoles()
    .then(response => {
      this.roles = response;
    })
    .catch(() => {
      this.showError();
    })
  }

  public goToCreate(): void {
    this.router.navigate(['/control/roles/create']);
  }

  showError(): void {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Comunicate con soporte'});
  }

}
