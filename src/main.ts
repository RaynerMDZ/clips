import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// To load firebase before app is loaded.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


if (environment.production) {
  enableProdMode();
}

firebase.initializeApp(environment.firebase);

let appInit: boolean = false;

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    platformBrowserDynamic().bootstrapModule(AppModule).catch(e => console.log(e));
  }
  appInit = true;
});
