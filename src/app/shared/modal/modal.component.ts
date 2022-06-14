import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  modalId: string = '';

  constructor(readonly modal: ModalService, readonly el: ElementRef) { }

  ngOnInit(): void {
    // Makes parent css not to affect this component.
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalId);
    return;
  }

}
