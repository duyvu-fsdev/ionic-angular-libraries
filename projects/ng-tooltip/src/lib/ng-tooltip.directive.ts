import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  Input,
} from '@angular/core';
import { NgTooltipComponent } from './ng-tooltip.component';

@Directive({
  selector: '[tooltip]',
})
export class NgTooltipDirective {
  @Input() tooltipText = '';
  @Input() tooltipClass = '';

  private tooltipComponent: ComponentRef<any> | undefined;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) private document: Document
  ) {}
  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.tooltipComponent) return;
    const tooltipComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(NgTooltipComponent);
    this.tooltipComponent = tooltipComponentFactory.create(this.injector);
    this.document.body.appendChild(
      this.tooltipComponent.location.nativeElement
    );
    this.setTooltipComponentProperties();
    this.tooltipComponent.hostView.detectChanges();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.tooltipComponent || !this.tooltipComponent.hostView) return;
    this.appRef.detachView(this.tooltipComponent.hostView);
    this.tooltipComponent.destroy();
    this.tooltipComponent = undefined;
  }

  private setTooltipComponentProperties() {
    if (!this.tooltipComponent || !this.tooltipComponent.instance) return;

    this.tooltipComponent.instance.text = this.tooltipText;
    this.tooltipComponent.instance.class = this.tooltipClass;
    this.appRef.attachView(this.tooltipComponent.hostView);
    this.document.body.appendChild(
      this.tooltipComponent.location.nativeElement
    );
    const { left, right, bottom, top, height } =
      this.elementRef.nativeElement.getBoundingClientRect();
    setTimeout(() => {
      const tooltipElement = this.document.querySelector(
        '.tooltip'
      ) as HTMLElement;
      if (!tooltipElement) return;
      const { height: tooltipHeight, width: tooltipWidth } =
        tooltipElement.getBoundingClientRect();
      let tooltipLeft = (right - left) / 2 + left;
      let tooltipTop = bottom;
      let positionClass = 'bottom-center';
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      if (tooltipLeft + tooltipWidth / 2 > windowWidth) {
        tooltipLeft = left - tooltipWidth / 2 - 5;
        tooltipTop = top + height / 2 - tooltipHeight / 2;
        positionClass = 'left';
      } else if (tooltipLeft - tooltipWidth / 2 < 0) {
        tooltipLeft = right + tooltipWidth / 2;
        tooltipTop = top + height / 2 - tooltipHeight / 2;
        positionClass = 'right';
      } else if (tooltipTop + tooltipHeight > windowHeight) {
        tooltipTop = top - tooltipHeight - 5;
        positionClass = 'top-center';
      }
      if (this.tooltipComponent)
        this.tooltipComponent.instance.left = tooltipLeft;
      if (this.tooltipComponent)
        this.tooltipComponent.instance.top = tooltipTop;
      if (this.tooltipComponent)
        this.tooltipComponent.instance.positionClass = positionClass;
      if (this.tooltipComponent) this.tooltipComponent.hostView.detectChanges();
    }, 0);
  }
}
