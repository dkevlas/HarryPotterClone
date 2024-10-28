import { houseInfoAchievements } from './../../../data/houses';
import { Component } from '@angular/core';
import { Character, houseAchievements } from '../../../data/interfaces';
import { IndexHouseService } from '../../../services/index-house.service';
import { gryffCharacters } from '../../../data/houses/gryffindor/gryffCharactersPhotos';
import { slytherCharacter } from '../../../data/houses/slytherin/slytherCharactersPhotos';
import { huffleCharacters } from '../../../data/houses/hufflepuff/huffleCharactersPhotos';
import { ravenCharacters } from '../../../data/houses/ravenclaw/ravenCharactersPhotos';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  indexService: number = 0
  infoAchievements: houseAchievements[] = houseInfoAchievements

  constructor(private numberBridge: IndexHouseService){}

  infoControlled: Character[] = []
  photosOf: Character[][] = [gryffCharacters, slytherCharacter, huffleCharacters, ravenCharacters]
  

  
  ngOnInit(): void {
    this.indexCatched()
    this.showCharacter()
  }

  showItem: number = 0
  visibility: string = ''
  showCharacter(){
    for(let i = 0; i < 2; i++){
      this.showItem += 1
      if(this.infoAchievements[this.indexService].characters.length == 0){
        this.visibility = 'hidden'
        break
      }
      if(this.infoAchievements[this.indexService].characters.length == this.showItem){
        this.infoControlled.push(this.photosOf[this.indexService][this.showItem - 1])
        this.visibility = 'hidden'
        break
      } 
      this.infoControlled.push(this.photosOf[this.indexService][this.showItem - 1])
    }
  }
  
  indexCatched(){
    this.numberBridge.number$.subscribe(value => {
      this.indexService = value
    })
  }

  photosOk: boolean = false
  showPhotos: number = 0
  showMore(i: number): void{
    this.showPhotos = i
    this.photosOk = true
    document.body.style.overflow = 'hidden'
  }

  getClose(value: boolean){
    this.photosOk = value
  }
}
