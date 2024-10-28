import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  @Input()
  allPhotos: any

  @Output()
  closePhotos = new EventEmitter<boolean>()

  private close: boolean = false

  sendClose(){
    this.closePhotos.emit(this.close)
    document.body.style.overflow = 'auto'
  }
}