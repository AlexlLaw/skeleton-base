import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { ParamsService } from '../../services/params.service';

@Component({
  selector: 'app-layout-auth',
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.scss']
})
export class LayoutAuthComponent {

  public style: object = {'margin-left': '250px'};
  public openOrClose: boolean = false;

  constructor(
   private activatedRoute: ActivatedRoute,
   private router: Router,
   private titleService: Title,
   private paramsService: ParamsService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        })
      )
      .pipe(switchMap((route) => route.data))
      .subscribe((event) => {
        this.titleService.setTitle(event['titulo']);
        this.paramsService.setSubtitle = event['subtitle'];
        this.paramsService.setTypePage = event['typePage'];
        }
      );
  }

  public receiveOpenOrClose(event?: any): void {
   this.openOrClose = event;
   if (event) {
     this.style = {'margin-left': '70px'};
     return;
   }

   this.style = {'margin-left': '250px'};
  }
}
