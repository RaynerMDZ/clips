import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input()
  modalId: string = '';

  constructor(
    readonly modal: ModalService,
    readonly el: ElementRef
  ) { }

  ngOnInit(): void {
    // Makes parent css not to affect this component.
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalId);
    return;
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement);
  }

}
