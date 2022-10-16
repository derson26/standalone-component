import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { CardComponent } from '../card/card.component';
import { Observable } from 'rxjs';
import { IDog } from 'src/app/interfaces/dog';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [CommonModule, MaterialModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  dogList$!:Observable<IDog[]>;

  constructor(private dogServices: DogService) { }

  ngOnInit(): void {
    this.dogList$ = this.dogServices.dogs();
  }

}
