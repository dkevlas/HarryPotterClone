import { Component, OnInit } from '@angular/core';
import { infoHouseNav } from '../../../data/interfaces';
import { infoNav } from '../../../data/houses';
import { IndexHouseService } from '../../../services/index-house.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  infoNav: infoHouseNav[] = infoNav
  indexService: number = 0 //Numero del SERVICIO INDEX
  
  constructor(private numberBridge: IndexHouseService){}
  ngOnInit(): void {
    this.indexCatched()
    this.allPath(this.indexService)
  }
  //Numero capturado del componente HOME
  indexCatched(){
    this.numberBridge.number$.subscribe(value => {
      this.indexService = value
    })
  }

  //RUTAS
  pathAbout: string = ''
  pathAchievements: string = ''
  pathBecomeStudents: string = ''
  allPath(number: number){
    this.pathAbout = `/${this.infoNav[number].pathHouse.toLowerCase()}/nosotros`
    this.pathAchievements = `/${this.infoNav[number].pathHouse.toLowerCase()}/logros`
    this.pathBecomeStudents = `/${this.infoNav[number].pathHouse.toLowerCase()}/ser-estudiante`
  }
}
