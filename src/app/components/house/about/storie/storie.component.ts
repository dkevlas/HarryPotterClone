import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Storie } from '../../../../data/interfaces';
import { houseStorie } from '../../../../data/houses';

@Component({
  selector: 'app-storie',
  templateUrl: './storie.component.html',
  styleUrl: './storie.component.scss'
})
export class StorieComponent {
  @Output()
  close = new EventEmitter<boolean>();

  sendClose(){
    this.close.emit(false)
  }

  @Input()
  index: number = 0

  allStories: Storie[] = houseStorie
}
