import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard'

import { MaterialModule } from '../shared/material.module';
import { PipesModule } from '../pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ApplicationHomeComponent } from './app-home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DefineComponent } from './components/define/define.component';
import { HtmlComponent } from './components/html/html.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { FormPublishService } from './services/form-publish.service';
import { NewFormElementDefinitionComponent } from './components/new-form-definition/new-form-element-definition.component';





const routes: Routes = [
  { path: '', component: ApplicationHomeComponent,
    children: [
      { path: '', component: MainContentComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
      ApplicationHomeComponent,
      MainContentComponent,
      ToolbarComponent,
      SidenavComponent,
      DefineComponent,
      HtmlComponent,
      TypescriptComponent,
      NewFormElementDefinitionComponent],
  providers:[
    FormPublishService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    RouterModule.forChild(routes)
  ],
})
export class ApphomeModule { }
