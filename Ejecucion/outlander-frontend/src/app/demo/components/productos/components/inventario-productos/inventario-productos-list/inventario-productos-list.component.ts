import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventarioProducto } from 'src/app/demo/components/models/inventarioProducto.model';

@Component({
  selector: 'app-inventario-productos-list',
  templateUrl: './inventario-productos-list.component.html',
  styleUrls: ['./inventario-productos-list.component.scss']
})
export class InventarioProductosListComponent implements OnInit {

  @Input() inventarios: InventarioProducto[] = null;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToEdit(id: number) {
    this.router.navigate([`productos/inventario/edit/${id}`]);
  }

}
