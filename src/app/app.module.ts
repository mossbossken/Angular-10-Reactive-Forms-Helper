import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'apphome', loadChildren: './apphome/apphome.module#ApphomeModule' },
  { path: 'apphome', loadChildren: () => import('./apphome/apphome.module').then(m => m.ApphomeModule)},
  { path: '**', redirectTo: 'apphome' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
