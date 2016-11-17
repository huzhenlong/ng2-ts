/**
 * Created by 17710 on 2016/11/11.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);