import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTablasMesasChapineroComponent } from './pages-tablas-mesas-chapinero.component';

describe('PagesTablasMesasChapineroComponent', () => {
  let component: PagesTablasMesasChapineroComponent;
  let fixture: ComponentFixture<PagesTablasMesasChapineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesTablasMesasChapineroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesTablasMesasChapineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
