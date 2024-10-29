import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.scss'
})
export class RequirementsComponent {
  @Input()
  infoRequirements: any
  
  @Output()
  closeModal = new EventEmitter<boolean>()

  private closeRequirements: boolean = false
  close(){
    this.closeModal.emit(this.closeRequirements)
    document.body.style.overflow = 'auto'
  }
}
