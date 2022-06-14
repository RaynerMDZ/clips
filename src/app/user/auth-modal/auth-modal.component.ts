import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  private id: string = 'auth';

  constructor(readonly model: ModalService) { }

  ngOnInit(): void {
    this.model.register(this.id);
  }

  ngOnDestroy() {
    this.model.unregister(this.id);
  }

}
