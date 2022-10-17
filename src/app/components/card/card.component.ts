import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { IDog } from 'src/app/interfaces/dog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dog-card',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dog!:IDog;
  @Input() index!:number;

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }
}
