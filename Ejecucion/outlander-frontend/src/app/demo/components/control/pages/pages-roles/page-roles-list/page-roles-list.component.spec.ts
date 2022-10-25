import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRolesListComponent } from './page-roles-list.component';

describe('PageRolesListComponent', () => {
  let component: PageRolesListComponent;
  let fixture: ComponentFixture<PageRolesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRolesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
