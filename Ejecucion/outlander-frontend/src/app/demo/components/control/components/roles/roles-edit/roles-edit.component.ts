import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Permiso } from 'src/app/demo/components/models/permiso.model';
import { Rol } from 'src/app/demo/components/models/rol.model';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})
export class RolesEditComponent implements OnInit {

  @Input() rol: Rol;
  @Input() permisos: Permiso[];
  @Input() type: 'create' | 'edit' = 'create';
  @Input() idToEdit: number;
  @Output() handleRoles: EventEmitter<{
    idRol?: number;
    nombre: string;
    descripcion: string;
    tipo: string
    permisos: Permiso[]
  }> = new EventEmitter;
  tipos = [
    {name: 'Administrador', value: 'administrador'},
    {name: 'Cajero', value: 'cajero'},
    {name: 'Mesero', value: 'mesero'}
  ]
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void { }

  get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        idRol: new FormControl(this.type === 'create' ? null : this.idToEdit),
        nombre: new FormControl(this.type === 'create'? '' : this.rol.nombre, [Validators.required]),
        descripcion: new FormControl(this.type === 'create'? '' : this.rol.descripcion, [Validators.required]),
        tipo: new FormControl(this.type === 'create'? '' : this.rol.tipo, [Validators.required]),
        permisos: new FormControl(this.type === 'create'? '' : this.rol.permisos, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): Rol {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  handleRol(): void {
    this.handleRoles.emit({
      idRol: this.formRaw.idRol,
      nombre: this.formRaw.nombre,
      descripcion: this.formRaw.descripcion,
      tipo: this.formRaw.tipo,
      permisos: this.formRaw.permisos
    });
  }

}
