import { Component } from '@angular/core';
import { House } from '../../data/interfaces';
import { allHouse } from '../../data/houses';
import { Router } from '@angular/router';
import { IndexHouseService } from '../../services/index-house.service';
import { Color, colorsHouse } from '../../data/colors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  constructor(private router: Router, private numberBridge: IndexHouseService){}
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
  movePosition(index: number): void{
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
    this.houseCurrent = index
  }
  houseCurrent: number = 0  //Se usará adicional para pasar el NUM a otro componente
  stylesHouseSelected: number = 0
  backgroundCurrent: string = `url('${this.houses[0].bgImage}')`
  selectHouse(i: number): void{
    this.backgroundCurrent = `url('${this.houses[i].bgImage}')`
    this.stylesHouseSelected = i
    this.changeLayer(i)
  }
  //RUTA VARIABLE
  routeHouse(title: string){
    this.router.navigate(['/', title, 'nosotros'])
  }
  //NUMERO BRIDGE
  catchNumber(index: number){
    this.numberBridge.setNumber(index)
  }

  colors: Color[] = colorsHouse
  bgLayerColor = ''
  changeLayer(index: number): void{
    this.bgLayerColor = this.colors[index].primary
    document.documentElement.style.setProperty('--primary-color', this.colors[index].primary)
  }
}
