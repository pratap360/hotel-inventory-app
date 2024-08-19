// ! don't use angular app.module.ts and app-routering.module.ts as it is not used in this project also it is not supported in angular 18 version 
// import { APP_INITIALIZER, NgModule, provideZoneChangeDetection } from "@angular/core";
// import { AppComponent } from "./app.component";
// import { RoomsComponent } from "./rooms/rooms.component";
// import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
// import { HeaderComponent } from "./header/header.component";
// import { ContainerComponent } from "./container/container.component";
// import { EmployeeComponent } from "./employee/employee.component";
// import { BrowserModule } from "@angular/platform-browser";
// import { HTTP_INTERCEPTORS,  provideHttpClient } from "@angular/common/http";
// import { AppRoutingModule } from "./app-routing.module";
// import { RequestInterceptor } from "./request.interceptor";
// import { APP_CONFIG, APP_SERVICE_CONFIG } from "./AppConfig/appconfig.service";
// import { provideRouter } from "@angular/router";
// import { routes } from "./app.routes";
// import { InitService } from "./init.service";

// function initFactory(initService: InitService) {
//   return () => initService.init();
// }

// @NgModule({
//     declarations: [
//         AppComponent,
//         RoomsComponent,
//         RoomsListComponent,
//         HeaderComponent,
//         ContainerComponent,
//         EmployeeComponent,
//     ],
//     imports: [BrowserModule,AppRoutingModule],
//     providers: [
//       provideZoneChangeDetection({ eventCoalescing: true }),
//       // HttpClientModule,
//       provideRouter(routes),
//       {
//         provide: APP_SERVICE_CONFIG,
//         useValue: APP_CONFIG
//       },
//       {
//         provide: HTTP_INTERCEPTORS,
//         useValue: RequestInterceptor ,
//         multi: true
//       },
//       {
//         provide: APP_INITIALIZER,
//         useFactory: initFactory,
//         deps: [InitService],
//         multi: true,
//       },
      
//       provideHttpClient()
//     ],
//     bootstrap: [AppComponent],
// });