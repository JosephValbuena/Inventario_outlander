import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/demo/components/models/usuario.model';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  @Input() usuarios: Usuario[];
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  goToEdit(id: number): void {
    this.route.navigate([`/control/usuarios/edit/${id}`]);
  }

}
