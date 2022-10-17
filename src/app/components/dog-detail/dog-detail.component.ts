import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '../../modules/material/material.module';
import { DogService } from '../../services/dog.service';
import { IDog } from '../../interfaces/dog';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-dog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  // dog:IDog = {};
  dog$?:Observable<IDog>;

  constructor(private service: DogService, private activatedRouter:ActivatedRoute) {}

  ngOnInit(): void {
    // this.service.dogs().subscribe({
    //   next:(dogs) => {
    //     this.dog = (dogs[Number(this.activatedRouter.snapshot.paramMap.get('index'))])
    //   },
    //   error: (error) => console.log(error),
    //   complete:()=> {console.log("complete...")}
    // });

    this.dog$ = this.service.dogs().pipe(map(data=> data[Number(this.activatedRouter.snapshot.paramMap.get('index'))]));
  }

}
