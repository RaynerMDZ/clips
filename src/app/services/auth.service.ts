import { Injectable } from '@angular/core';

import { USER_COLLECTION } from "../util/database.collections";

import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import IUser from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection<IUser>;

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly database: AngularFirestore
  ) {
    this.usersCollection = database.collection(USER_COLLECTION);
  }

  async createUser(user: IUser) {

    const { name, email, age, password, phoneNumber } = user;

    if (!password) {
      throw new Error('Password is required');
    }

    try {
      const confirmation = await this.auth.createUserWithEmailAndPassword(email as string, password as string);

      await this.usersCollection.add({
        name: name as string,
        email: email as string,
        age: age as number,
        phoneNumber: phoneNumber as string,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        uid: confirmation.user?.uid
      });

    } catch (error) {
      console.log(error);
    }
  }
}

