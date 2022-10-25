import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/demo/components/models/rol.model';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

  @Input() roles: Rol[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToEdit(id: number) {
    this.router.navigate([`control/roles/edit/${id}`])
  }

}
