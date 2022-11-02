import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sede } from 'src/app/demo/components/models/sede.model';

@Component({
  selector: 'app-sedes-list',
  templateUrl: './sedes-list.component.html',
  styleUrls: ['./sedes-list.component.scss']
})
export class SedesListComponent implements OnInit {

  @Input() sedes: Sede[] = null;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToEdit(id: number): void {
    this.router.navigate([`/espacio/sedes/edit/${id}`]);
  }

}
