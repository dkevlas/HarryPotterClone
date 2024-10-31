import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNotImage]'
})
export class NotImageDirective {

  constructor(private elementeImg: ElementRef) { }

  @HostListener('error')
  loadImage(): void{
    this.elementeImg.nativeElement.src = 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/Reliquias-de-la-muerte.webp';
  }

}
