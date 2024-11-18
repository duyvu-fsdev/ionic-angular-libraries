import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTooltipDirective } from './ng-tooltip.directive';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgTooltipComponent } from './ng-tooltip.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [NgTooltipComponent, NgTooltipDirective],
  exports: [NgTooltipDirective],
})
export class TooltipModule {}
