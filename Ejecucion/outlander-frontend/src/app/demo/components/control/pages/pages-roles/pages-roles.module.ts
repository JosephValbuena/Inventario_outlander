import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRolesRoutingModule } from './pages-roles-routing.module';
import { PageRolesListComponent } from './page-roles-list/page-roles-list.component';
import { PageRolesEditComponent } from './page-roles-edit/page-roles-edit.component';
import { PageRolesCreateComponent } from './page-roles-create/page-roles-create.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RolesModule } from '../../components/roles/roles.module';


@NgModule({
  declarations: [
    PageRolesListComponent,
    PageRolesEditComponent,
    PageRolesCreateComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    RolesModule,
    PagesRolesRoutingModule
  ]
})
export class PagesRolesModule { }
