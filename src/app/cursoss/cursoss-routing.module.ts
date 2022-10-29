import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursossComponent } from './cursoss.component';

const routes: Routes = [{ path: '', component: CursossComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursossRoutingModule { }
