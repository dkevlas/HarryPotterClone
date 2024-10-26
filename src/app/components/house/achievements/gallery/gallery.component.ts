import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

  ngOnInit(): void {
      // console.log(this.allPhotos)
  }
  @Input()
  allPhotos: any

  @Output()
  closePhotos = new EventEmitter<boolean>()

  private close: boolean = false

  sendClose(){
    this.closePhotos.emit(this.close)
  }
  
}
