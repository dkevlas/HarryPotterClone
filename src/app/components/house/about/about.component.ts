import { Component, OnInit } from '@angular/core';
import { houseAbout } from '../../../data/interfaces';
import { houseInfoAbout,  } from '../../../data/houses';
import { IndexHouseService } from '../../../services/index-house.service';
import { changeColor } from '../../../data/colors';
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
    changeColor(this.indexService)
  }

  indexCatched(): void{
    this.numberBridge.number$.subscribe(value => {
      this.indexService = value
    })
  }

  bgHouse: string = `url('${this.infoAbout[this.indexService].bgHouse}')`

  isOpen: boolean = false
  openModal(){
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }
  closeModal(value: boolean){
    this.isOpen = value;
  }
}
