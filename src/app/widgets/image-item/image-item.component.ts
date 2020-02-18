import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { IModal } from '../modal/modal.interface';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {

  @Input() info: IModal;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.info = this.info;
  }

}
