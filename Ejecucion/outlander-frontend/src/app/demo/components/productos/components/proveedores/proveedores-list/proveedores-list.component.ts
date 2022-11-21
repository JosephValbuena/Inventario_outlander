import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/demo/components/models/proveedor.model';

@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedores-list.component.html',
  styleUrls: ['./proveedores-list.component.scss']
})
export class ProveedoresListComponent implements OnInit {

  @Input() proveedores: Proveedor[];
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToEdit(id: number): void {
    this.router.navigate([`productos/proveedores/edit/${id}`]);
  }

}
