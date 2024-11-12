import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Path relative to src

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
