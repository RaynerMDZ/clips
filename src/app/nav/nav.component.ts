import { Component, OnInit } from '@angular/core';
import { ModalService } from "../services/modal.service";
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    readonly modal: ModalService,
    readonly authService: AuthService,
    readonly firebaseAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
  }

  openModal($event: Event) {
    // prevents switching pages.
    $event.preventDefault();
    this.modal.toggleModal('auth');
    return;
  }

  async logout($event: MouseEvent) {
    $event.preventDefault();
    await this.firebaseAuth.signOut();
    return;
  }
}
