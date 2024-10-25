import { Component, OnInit } from '@angular/core';
import { houseAbout } from '../../../data/interfaces';
import { houseInfoAbout,  } from '../../../data/houses';
import { IndexHouseService } from '../../../services/index-house.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  indexService: number = 0 //VALOR PENDIENTE DEL SERVICIO CREADO (INDEX)
  infoAbout: houseAbout[] = houseInfoAbout

  constructor(private numberBridge: IndexHouseService){}

  ngOnInit(): void {
    this.indexCatched()
  }

  indexCatched(){
    this.numberBridge.number$.subscribe(value => {
      this.indexService = value
    })
  }

  bgHouse: string = `url('${this.infoAbout[this.indexService].bgHouse}')`
}
