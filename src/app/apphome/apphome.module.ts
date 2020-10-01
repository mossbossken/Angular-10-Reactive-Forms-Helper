import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ApplicationHomeComponent } from './app-home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: ApplicationHomeComponent,
    children: [
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ApplicationHomeComponent, MainContentComponent, ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ApphomeModule { }
