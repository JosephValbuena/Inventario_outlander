import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/demo/components/models/proveedor.model';

@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.scss']
})
export class ProveedoresEditComponent implements OnInit {

  @Input() type: 'create' | 'edit' = 'create';
  @Input() proveedor: Proveedor = null;
  @Input() idToEdit: number;
  @Output() manejoProveedores: EventEmitter<{
    idProveedor?: number;
    nombre: string;
    descripcion: string;
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        idProveedor: new FormControl(this.type === 'create' ? null : this.idToEdit),
        nombre: new FormControl(this.type === 'create'? '' : this.proveedor.nombre, [Validators.required]),
        descripcion: new FormControl(this.type === 'create'? '' : this.proveedor.descripcion, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): Proveedor {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  manejoProveedor(): void {
    this.manejoProveedores.emit({
      idProveedor: this.formRaw.idProveedor,
      nombre: this.formRaw.nombre,
      descripcion: this.formRaw.descripcion
    })
  }

}
