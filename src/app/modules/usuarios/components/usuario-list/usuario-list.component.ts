import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UsuarioListDto } from 'src/app/core/dtos/usuarios/usuario-list.dto';

import { UsuarioService } from 'src/app/core/services/usuario.service';
import { MSG_SUCCES } from 'src/app/core/utils/constants';
import { SweetalertCustom } from 'src/app/core/utils/sweetalert-custom';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit, OnDestroy {

  public dataSource: Array<UsuarioListDto> = new Array<UsuarioListDto>();
  private _subs = new SubSink();

  constructor(
    public router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this._subs.sink = this.usuarioService.get()
    .pipe(map(res => res.map((item: any) => new UsuarioListDto(item))))
      .subscribe((res) => {
      this.dataSource = res;
    });
  }

  public delete(item): void {
    SweetalertCustom.showAlertConfirmAndCancel('Atenção', 'warning', `Deseja realmente remover ${item.name} ?` ).then(
      (result) => {
        if (result.isConfirmed) {
          this._subs.sink = this.usuarioService.delete(item.id).subscribe(() => {
            SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
            this.getAll();
        });
        }
    });
  }

  public redirectUpdate(item): Promise<boolean> {
    return this.router.navigate([`dragons/editar/${item.id}`]);
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
