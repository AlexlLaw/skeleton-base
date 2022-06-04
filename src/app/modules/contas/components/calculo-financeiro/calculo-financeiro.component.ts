import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

import { Util } from 'src/app/core/utils/util';


@Component({
  selector: 'app-calculo-financeiro',
  templateUrl: './calculo-financeiro.component.html',
  styleUrls: ['./calculo-financeiro.component.css']
})
export class CalculoFinanceiroComponent implements OnInit {

  public dataSource;
  constructor(
    private usuarioService: UsuarioService
  ) {  }

  ngOnInit(): void {
    this.getById();
  }

  public getById(): void {
    this.usuarioService.getByCalculoFinanceiro(Util.getIdUserSession()).subscribe((res) => {
        this.dataSource = res.body
    });
  }
}
