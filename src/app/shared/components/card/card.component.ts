import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public title: string = ' Card';
  @Input() public subtitle: string = ' ';
  @Input() public nameButton: string = ' Adicionar';
  @Input() public icon: string = 'las la-igloo';
  @Input() public router: string = '';
  @Input() public iconButon: string = 'las la-plus';
}
