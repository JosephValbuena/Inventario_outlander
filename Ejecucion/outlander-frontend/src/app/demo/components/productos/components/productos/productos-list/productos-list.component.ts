import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/demo/components/models/producto.model';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {

  @Input() productos: Producto[]; 
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToEdit(id: number) {
    this.router.navigate([`/productos/productos/edit/${id}`]);
  }

}
