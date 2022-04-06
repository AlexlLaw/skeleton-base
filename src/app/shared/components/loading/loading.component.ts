import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';

import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public loading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.isLoading.pipe(timeout(1000)).subscribe((res) => {
      this.loading = res;
    });
  }
}
