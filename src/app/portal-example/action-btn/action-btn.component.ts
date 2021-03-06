import { CdkPortal, DomPortalHost, DomPortalOutlet } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-action-btn',
  template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class ActionBtnComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal)
  private portal: CdkPortal;

  private host: DomPortalHost;

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
  }

  ngOnDestroy(): void {
      this.host.detach();
    }

  ngAfterViewInit(): void {
    const elementRef: Element = document.querySelector('#action');
    this.host = new DomPortalHost(
      elementRef,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    this.host.attach(this.portal);
    }
}
