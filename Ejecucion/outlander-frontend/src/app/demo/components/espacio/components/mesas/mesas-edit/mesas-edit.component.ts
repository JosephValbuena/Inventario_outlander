import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mesa } from 'src/app/demo/components/models/mesa.model';

@Component({
  selector: 'app-mesas-edit',
  templateUrl: './mesas-edit.component.html',
  styleUrls: ['./mesas-edit.component.scss']
})
export class MesasEditComponent implements OnInit {

  @Input() type: 'create' | 'edit' = 'create';
  @Input() mesa: Mesa;
  @Input() idToEdit: number;
  @Output() handleMesas: EventEmitter<{
    idMesa?: number;
    descripcion: string;
    numMesa: number;
    estado: 'ocupado' | 'libre';
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get form(): FormGroup {
    if(!this._form) {
      this._form = new FormGroup({
        idMesa: new FormControl(this.type === 'create'? '' : this.idToEdit),
        descripcion: new FormControl(this.type === 'create'? '' : this.mesa.descripcion, [Validators.required]),
        numMesa: new FormControl(this.type === 'create'? '' : this.mesa.numMesa, [Validators.required]),
      });
    }
    return this._form;
  }

  get formRaw(): Mesa {
    return this._form.getRawValue();
  }

  get valid(): boolean {
    return this._form.valid;
  }

  handleMesa(): void {
    this.handleMesas.emit({
      idMesa: this.idToEdit,
      descripcion: this.formRaw.descripcion,
      numMesa: this.formRaw.numMesa,
      estado: 'libre'
    });
  }

}
