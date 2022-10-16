import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDog } from '../interfaces/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogs$: BehaviorSubject<IDog[]> = new BehaviorSubject<IDog[]>([]);

  constructor() {
    this.dogs$.next([
      { url: '../../assets/dog1.png', description:'Beautiful dog 1', name:'dog 1'},
      { url: '../../assets/dog2.png', description:'Beautiful dog 2', name:'dog 2'},
      { url: '../../assets/dog3.png', description:'Beautiful dog 3', name:'dog 3'}
    ])
   }

   public dogs(){
    return this.dogs$.asObservable();
   }
}
