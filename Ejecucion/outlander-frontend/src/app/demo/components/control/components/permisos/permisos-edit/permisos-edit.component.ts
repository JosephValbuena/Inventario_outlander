import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Permiso } from 'src/app/demo/components/models/permiso.model';

@Component({
  selector: 'app-permisos-edit',
  templateUrl: './permisos-edit.component.html',
  styleUrls: ['./permisos-edit.component.scss']
})
export class PermisosEditComponent implements OnInit {

  @Input() type: 'create' | 'edit' = 'create';
  @Input() permiso: Permiso;
  @Input() idToEdit: number;
  @Output() handlePermisos: EventEmitter<{
    idPermiso?: number;
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
        idPermiso: new FormControl(this.type === 'create' ? null : this.idToEdit),
        nombre: new FormControl(this.type === 'create'? '' : this.permiso.nombre, [Validators.required]),
        descripcion: new FormControl(this.type === 'create'? '' : this.permiso.descripcion, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): Permiso {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  handlePermiso(): void {
    this.handlePermisos.emit({
      idPermiso: this.formRaw.idPermiso,
      nombre: this.formRaw.nombre,
      descripcion: this.formRaw.descripcion
    });
  }

}
