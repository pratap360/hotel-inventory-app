import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
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
    {
      provide: HTTP_INTERCEPTORS,
      useValue: RequestInterceptor ,
      multi: true
    },
    provideHttpClient()
  ],
};
