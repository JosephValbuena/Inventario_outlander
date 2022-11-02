import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';

@Component({
  selector: 'app-sedes-edit',
  templateUrl: './sedes-edit.component.html',
  styleUrls: ['./sedes-edit.component.scss']
})
export class SedesEditComponent implements OnInit {

  @Input() showTable: boolean = false;
  @Input() usuarios: Usuario[] = null;
  @Input() sede: Sede = null;
  @Input() type: 'create' | 'edit' = 'create';
  @Input() idToEdit: number;
  @Output() handleSedes: EventEmitter<{
    idSede?: number;
    nombre: string;
    descripcion: string;
    usuarios: Usuario[];
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    if(!this._form) {
      this._form = new FormGroup({
        idSede: new FormControl(this.type === 'create'? '' : this.idToEdit),
        nombre: new FormControl(this.type === 'create'? '' : this.sede.nombre, [Validators.required]),
        descripcion: new FormControl(this.type === 'create'? '' : this.sede.descripcion, [Validators.required]),
        usuarios: new FormControl(this.type === 'create'? '' : this.sede.usuarios, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): Sede {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  handleSede(): void {
    this.handleSedes.emit({
      idSede: this.idToEdit,
      nombre: this.formRaw.nombre,
      descripcion: this.formRaw.descripcion,
      usuarios: this.formRaw.usuarios
    });
  }
}
