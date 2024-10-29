import { Component } from '@angular/core';
import { houseBecomeStudent } from '../../../data/interfaces';
import { houseInfoBecomeStudent } from '../../../data/houses';
import { IndexHouseService } from '../../../services/index-house.service';
import { changeColor } from '../../../data/colors';

@Component({
  selector: 'app-become-student',
  templateUrl: './become-student.component.html',
  styleUrl: './become-student.component.scss'
})
export class BecomeStudentComponent {
  indexService: number = 0
  infoBecomeStudent: houseBecomeStudent[] = houseInfoBecomeStudent

  constructor(private numberBridge: IndexHouseService){}

  ngOnInit(): void {
    this.indexCatched()
    changeColor(this.indexService)
  }

  indexCatched(){
    this.numberBridge.number$.subscribe(value => {
      this.indexService = value
    })
  }

  showBecomeStudent: boolean = false
  openBecomeStudent(){
    this.showBecomeStudent = true
    document.body.style.overflow = 'hidden'
  }

  getCloseRequirements(value: boolean){
    this.showBecomeStudent = value
  }
}
