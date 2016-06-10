import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ChorusAppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(ChorusAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://td-chorus.firebaseio.com'),
]);
