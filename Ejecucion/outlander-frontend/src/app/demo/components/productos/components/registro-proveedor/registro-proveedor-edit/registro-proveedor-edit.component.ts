import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { Proveedor } from 'src/app/demo/components/models/proveedor.model';
import { RegistroProveedor } from 'src/app/demo/components/models/registroProveedor.model';
import { Sede } from 'src/app/demo/components/models/sede.model';

@Component({
  selector: 'app-registro-proveedor-edit',
  templateUrl: './registro-proveedor-edit.component.html',
  styleUrls: ['./registro-proveedor-edit.component.scss']
})
export class RegistroProveedorEditComponent implements OnInit {

  @Input() type: 'create' | 'edit' = 'create';
  @Input() registro: RegistroProveedor = null;
  @Input() idToEdit: number;
  @Input() procuctos: Producto[];
  @Input() sedes: Sede[];
  @Input() proveedores: Proveedor[];
  @Output() manejoregistros: EventEmitter<{
    idRegistro?: number;
    producto: Producto;
    proveedor: Proveedor;
    cantidad: number;
    sede: Sede;
    fecha_registro: string;
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        idRegistro: new FormControl(this.type === 'create' ? null : this.idToEdit),
        producto: new FormControl(this.type === 'create'? '' : this.registro.producto, [Validators.required]),
        proveedor: new FormControl(this.type === 'create'? '' : this.registro.proveedor, [Validators.required]),
        sede: new FormControl(this.type === 'create'? '' : this.registro.sede, [Validators.required]),
        cantidad: new FormControl(this.type === 'create'? '' : this.registro.cantidad, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): RegistroProveedor {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  manejoRegistro(): void {
    this.manejoregistros.emit({
      idRegistro: null,
      producto: this.formRaw.producto,
      cantidad: this.formRaw.cantidad,
      proveedor: this.formRaw.proveedor,
      sede: this.formRaw.sede,
      fecha_registro: null
    });
  }

}
