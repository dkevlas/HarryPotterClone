import { Component, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allHouse } from '../../data/houses';
import { House } from '../../data/interfaces';
import { Color, colorsHouse } from '../../data/colors';
import { IndexHouseService } from '../../services/index-house.service';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})
export class HouseComponent implements OnInit{

  houses: House[] = allHouse
  indexHouse: number = 0
  colors: Color[] = colorsHouse
  bgImage: string = ''
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private indexService: IndexHouseService){}

  ngOnInit(): void {
    this.selectOne()
    this.bgImage = `url('${this.houses[this.indexHouse].bgHouseSections}')`
  }

  selectOne(): void{
    const houseSelected = this.activatedRoute.snapshot.paramMap.get('house')
    const index = this.houses.findIndex(h => h.redirectHouse === houseSelected)
    this.indexHouse = index
  }

  houseOK(): boolean{
    const numbersHouses = [0, 1, 2, 3]
    return numbersHouses.includes(this.indexHouse) ? true : false
  }

  goHome(){
    this.router.navigate(['/'])
    document.documentElement.style.setProperty('--primary-color', colorsHouse[0].primary);
  }
}