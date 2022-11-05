import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/demo/components/models/producto.model';

@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.scss']
})
export class ProductosEditComponent implements OnInit {
  
  @Input() type: 'create' | 'edit' = 'create';
  @Input() producto: Producto;
  @Input() idToEdit: number;
  @Output() manejoProductos: EventEmitter<{
    idProducto?: number;
    nombre: string;
    marca: string;
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        idProducto: new FormControl(this.type === 'create' ? null : this.idToEdit),
        nombre: new FormControl(this.type === 'create'? '' : this.producto.nombre, [Validators.required]),
        marca: new FormControl(this.type === 'create'? '' : this.producto.marca, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): Producto {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  manejoProducto(): void {
    this.manejoProductos.emit({
      idProducto: this.formRaw.idProducto,
      nombre: this.formRaw.nombre,
      marca: this.formRaw.marca
    });
  }

}
