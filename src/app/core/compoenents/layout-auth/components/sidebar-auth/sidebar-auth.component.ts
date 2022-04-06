import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar-auth',
  templateUrl: './sidebar-auth.component.html',
  styleUrls: ['./sidebar-auth.component.scss']
})
export class SidebarAuthComponent implements AfterContentChecked {

  @Output() public openOrClose: EventEmitter<boolean> = new  EventEmitter<boolean>();
  public openOrCloseSideBar: boolean = false;
  constructor() { }

  ngAfterContentChecked() {
    this.activeSideBar();
  }

 public activeSideBar(): void {
    const baseUrl = window.location.origin;
    const url = window.location.href.replace(baseUrl, '');

    $('ul a').filter(function() {
      return this.href.replace(baseUrl, '') !== url;
    }).removeClass('c-sidebar__menu--active');

    $('ul a').filter(function() {
      return this.href.replace(baseUrl, '') === url;
    }).addClass('c-sidebar__menu--active');
  }

  public sendOpenClose(event: any): void {
    this.openOrClose.emit(this.openOrCloseSideBar = !this.openOrCloseSideBar);
  }

}
