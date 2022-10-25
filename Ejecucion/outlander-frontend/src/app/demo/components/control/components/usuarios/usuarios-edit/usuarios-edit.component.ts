import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rol } from 'src/app/demo/components/models/rol.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.scss']
})
export class UsuariosEditComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() roles: Rol[];
  @Input() type: 'create' | 'edit' = 'create';
  @Input() idToEdit: number;
  @Output() handleUsuarios: EventEmitter<{
    idUsuario?: number;
    nombre: string;
    correo: string;
    apellido: string;
    roles: Rol[];
    nombreUsuario: string;
    contrasena: string;
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        idUsuario: new FormControl(this.type === 'create' ? null : this.idToEdit),
        nombre: new FormControl(this.type === 'create'? '' : this.usuario.nombre, [Validators.required]),
        correo: new FormControl(this.type === 'create'? '' : this.usuario.correo, [Validators.required]),
        apellido: new FormControl(this.type === 'create'? '' : this.usuario.apellido, [Validators.required]),
        roles: new FormControl(this.type === 'create'? '' : this.usuario.roles, [Validators.required]),
        nombreUsuario: new FormControl(this.type === 'create'? '' : this.usuario.nombreUsuario, [Validators.required]),
        contrasena: new FormControl(this.type === 'create'? '' : this.usuario.contrasena, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): Usuario {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  handleUsuario(): void {
    this.handleUsuarios.emit({
      idUsuario: this.formRaw.idUsuario,
      nombre: this.formRaw.nombre,
      correo: this.formRaw.correo,
      apellido: this.formRaw.apellido,
      roles: this.formRaw.roles,
      nombreUsuario: this.formRaw.nombreUsuario,
      contrasena: this.formRaw.contrasena
    });
  }

}
