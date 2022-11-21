import { Component, Input, OnInit } from '@angular/core';
import { RegistroProveedor } from 'src/app/demo/components/models/registroProveedor.model';

@Component({
  selector: 'app-registro-proveedor-list',
  templateUrl: './registro-proveedor-list.component.html',
  styleUrls: ['./registro-proveedor-list.component.scss']
})
export class RegistroProveedorListComponent implements OnInit {

  @Input() registros: RegistroProveedor[] = null;
  constructor() { }

  ngOnInit(): void {
  }

}
