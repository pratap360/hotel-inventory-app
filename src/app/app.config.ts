import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { provideZoneChangeDetection } from "@angular/core";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { RequestInterceptor } from "./request.interceptor";
import { APP_CONFIG, APP_SERVICE_CONFIG } from "./AppConfig/appconfig.service";
import { InitService } from "./init.service";

// Factory function to initialize the service
function initFactory(initService: InitService) {
  return () => initService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    // Providing necessary Angular services and modules
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),

    // Custom providers
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }
  ],
};
