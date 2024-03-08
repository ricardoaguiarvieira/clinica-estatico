import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.scss'],
})
export class CardLabelComponent implements OnInit {
  @Input() type = '';
  labelStyle = ['', ''];
  constructor() {}

  ngOnInit(): void {
    this.labelStyle[0] = `label-${this.type}`;
    this.labelStyle[1] = `label-color-${this.type}`;

  }
}
