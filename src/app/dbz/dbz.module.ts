import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list-dbz/list-dbz.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
;


@NgModule({
  exports: [
    MainPageComponent,
    ListDbzComponent
  ],
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
