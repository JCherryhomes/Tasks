﻿import 'core-js/client/shim';
import 'zone.js';
import 'reflect-metadata';
import 'rxjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule); 