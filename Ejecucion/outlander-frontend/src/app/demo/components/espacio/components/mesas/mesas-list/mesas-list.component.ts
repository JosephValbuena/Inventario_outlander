import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from 'src/app/demo/components/models/mesa.model';

@Component({
  selector: 'app-mesas-list',
  templateUrl: './mesas-list.component.html',
  styleUrls: ['./mesas-list.component.scss']
})
export class MesasListComponent implements OnInit {

  @Input() mesas: Mesa[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToEdit(id: number): void {
    this.router.navigate([`/espacio/mesas/edit/${id}`]);
  }

}
