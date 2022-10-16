import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';
import { DogService } from '../../services/dog.service';
import { map, Observable, of } from 'rxjs';
import { IDog } from '../../interfaces/dog';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  dog:IDog = {};

  constructor(private service: DogService, private activatedRouter:ActivatedRoute) {}

  ngOnInit(): void {
    this.service.dogs().subscribe({
      next:(dogs) => {
        this.dog = (dogs[Number(this.activatedRouter.snapshot.paramMap.get('index'))])
      console.log(this.dog)
      },
      error: (error) => console.log(error),
      complete:()=> {console.log("complete...")}
    });
  }

}
