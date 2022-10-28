import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ConcatPipe } from './pipes/concat.pipe';
import { GiveMe20Directive } from './directives/give-me20.directive';
import { LoaderService } from './components/loader.service';

@NgModule({
  declarations: [ConcatPipe, GiveMe20Directive],
  imports: [CommonModule, MaterialModule],
  exports: [ConcatPipe, GiveMe20Directive, MaterialModule],
  providers: [LoaderService],
})
export class SharedModule {}
