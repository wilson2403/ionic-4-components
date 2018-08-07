import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loading: boolean = false;
  public isComplete: boolean = false;
  public loadChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loading);
  public completeChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isComplete);


  constructor() { }

  load() {
    this.loading = true;
    this.loadChange.next(this.loading);
  }

  unload() {
    this.loading = false;
    this.loadChange.next(this.loading);
    this.isComplete = false;
  }

  toggleSpinner() {
    this.loading = !this.loading;
  }

  complete(){
    console.log('set service complete');
    this.isComplete = true;
    this.completeChange.next(this.isComplete);
  }
}
