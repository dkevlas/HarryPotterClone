import { positions } from './../../data/houses';
import { AfterViewInit, Component } from '@angular/core';
import { allHouse, House } from '../../data/houses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
  }
  houses: House[] = allHouse

  areas = ['a', 'b', 'c', 'd']
  gridArea(index: number){
    return {
      'grid-area': `${this.areas[index]}`
    }
  }
  itemPrev: number = 0
  clickTop: number | null = 0
  guardarItem: string = ''
  movePosition(index: number){
    if(this.clickTop === null){
      this.guardarItem = this.areas[this.itemPrev]
      this.areas[this.itemPrev] = this.areas[index]
      this.areas[index] = this.guardarItem
      this.itemPrev = index
    } else if(index !== this.clickTop){
      this.guardarItem = this.areas[index]
      this.areas[index] = this.areas[this.clickTop]
      this.areas[this.clickTop] = this.guardarItem
      this.itemPrev = index
      this.clickTop = null
    }
  }
}
