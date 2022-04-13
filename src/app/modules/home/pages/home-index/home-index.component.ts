import { Component, OnDestroy, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { UsuarioListDto } from 'src/app/core/dtos/usuarios/usuario-list.dto';
import { UsuariosService } from 'src/app/modules/usuarios/services/usuarios.service';
import { SubSink } from 'subsink';



@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit, OnDestroy {

  public dataSource: number = 0;
  private _subs = new SubSink();

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this._subs.sink = this.usuariosService.get()
    .pipe(map(res => res.map((item: any) => new UsuarioListDto(item))))
    .subscribe((res) => {
      this.dataSource = res.length;
    });
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
