import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursossRoutingModule } from './cursoss-routing.module';
import { CursossComponent } from './cursoss.component';


@NgModule({
  declarations: [
    CursossComponent
  ],
  imports: [
    CommonModule,
    CursossRoutingModule
  ]
})
export class CursossModule { }
