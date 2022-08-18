import { Component, Input, OnInit } from '@angular/core';
import { Indicator } from '../../models/indicator';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() indicator: Indicator = new Indicator();

  constructor() { }

  ngOnInit(): void {
  }

}
