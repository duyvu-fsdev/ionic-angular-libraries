import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ng-tooltip',
  templateUrl: './ng-tooltip.component.html',
  styleUrls: ['../../styles/ng-tooltip.scss'],
})
export class NgTooltipComponent {
  @Input() text = '';
  @Input() left = 0;
  @Input() top = 0;
  @Input() positionClass = 'hide';
  @Input() class!: string;

  @HostBinding('class') get hostClass() {
    if (this.class) return `tooltip-container ${this.class}`;
    else return 'tooltip-container';
  }
}
