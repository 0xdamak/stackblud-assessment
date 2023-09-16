import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-base-modal-wrapper',
  templateUrl: './base-modal-wrapper.component.html',
  styleUrls: ['./base-modal-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BaseModalWrapperComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }
}
