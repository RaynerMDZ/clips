import { Component, OnInit } from '@angular/core';
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(readonly modal: ModalService) { }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    // prevents switching pages.
    $event.preventDefault();
    this.modal.toggleModal('auth');
    return;
  }

}
