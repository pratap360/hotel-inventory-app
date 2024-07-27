import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { provideHttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

// import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // HttpClientModule,
    provideRouter(routes),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    provideHttpClient()
  ],
};
