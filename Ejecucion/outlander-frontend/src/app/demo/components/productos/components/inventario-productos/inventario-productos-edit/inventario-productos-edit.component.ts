import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventarioProducto } from 'src/app/demo/components/models/inventarioProducto.model';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { Sede } from 'src/app/demo/components/models/sede.model';

@Component({
  selector: 'app-inventario-productos-edit',
  templateUrl: './inventario-productos-edit.component.html',
  styleUrls: ['./inventario-productos-edit.component.scss']
})
export class InventarioProductosEditComponent implements OnInit {

  @Input() productos: Producto[] = null;
  @Input() sedes: Sede[] = null;
  @Input() type: 'create' | 'edit' = 'create';
  @Input() inventario: InventarioProducto;
  @Input() idToEdit: number;
  @Output() manejoInventarios: EventEmitter<{
    idInventario?: number;
    producto: Producto;
    cantidad: number;
    sede: Sede;
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        idInventario: new FormControl(this.type === 'create' ? null : this.idToEdit),
        producto: new FormControl(this.type === 'create'? '' : this.inventario.producto, [Validators.required]),
        cantidad: new FormControl(this.type === 'create'? '' : this.inventario.cantidad, [Validators.required]),
        sede: new FormControl(this.type === 'create'? '' : this.inventario.sede, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): InventarioProducto {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  manejoInventario(): void {
    this.manejoInventarios.emit({
      idInventario: this.formRaw.idInventario,
      cantidad: this.formRaw.cantidad,
      producto: this.formRaw.producto,
      sede: this.formRaw.sede
    });
  }

}
