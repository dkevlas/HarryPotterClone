import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexHouseService {
  private numberBridge = new BehaviorSubject<number>(this.getNumberFromLocalStorage())
  number$ = this.numberBridge.asObservable()

  setNumber(newNumber: number){
    localStorage.setItem('capturedNumber', newNumber.toString())
    this.numberBridge.next(newNumber)
  }

  private getNumberFromLocalStorage(): number{
    const storedNumber = localStorage.getItem('capturedNumber')
    return storedNumber ? Number(storedNumber) : 0
  }
}
