import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [CommonModule, MaterialModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
