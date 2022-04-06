import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-auth',
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.scss']
})
export class LayoutAuthComponent {

 public style: object = {'margin-left': '250px'};
 public openOrClose: boolean = false;

  public receiveOpenOrClose(event?: any): void {
   this.openOrClose = event;
   if (event) {
     this.style = {'margin-left': '70px'};
     return;
   }
   this.style = {'margin-left': '250px'};
  }
}
