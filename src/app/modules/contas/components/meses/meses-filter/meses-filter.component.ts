import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AnosEnum } from 'src/app/core/enums/anos.enum';


@Component({
  selector: 'app-meses-filter',
  templateUrl: './meses-filter.component.html',
  styleUrls: ['./meses-filter.component.css']
})
export class MesesFilterComponent implements OnInit {
  public enumAnos = new AnosEnum();
  public form: FormGroup;
  @Output() private filter$: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }

  public creatForm(): void {
   this.form = this.formBuilder.group({
      ano: new FormControl(''),
    });
  }

  public submit(): void {
    this.filter$.emit(this.form.value);
  }

}
