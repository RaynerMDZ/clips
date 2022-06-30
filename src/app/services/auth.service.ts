import { Injectable } from '@angular/core';

import { USER_COLLECTION } from "../util/database.collections";

import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import IUser from "../models/user.model";
import { delay, map, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly database: AngularFirestore
  ) {
    this.usersCollection = database.collection(USER_COLLECTION);
    this.isAuthenticated$ = this.auth.user.pipe(
      map(user => user !== null)
    );
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    );
  }

  async createUser(user: IUser) {

    const { name, email, age, password, phoneNumber } = user;

    if (!password) {
      throw new Error('Password is required');
    }

    try {
      const confirmation = await this.auth.createUserWithEmailAndPassword(email as string, password as string);

      if (!confirmation.user) throw new Error('User does not exist');

      await this.usersCollection.doc(confirmation.user?.uid).set({
        uid: await confirmation.user?.uid,
        name: name as string,
        email: email as string,
        age: age as number,
        phoneNumber: phoneNumber as string,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      await confirmation.user?.updateProfile({
        displayName: name as string
      });

    } catch (error) {
      console.log(error);
    }
  }
}

