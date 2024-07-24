import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        RoomsComponent,
        RoomsListComponent,
        HeaderComponent,
        ContainerComponent,
        EmployeeComponent,
    ],
    imports: [BrowserModule,HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
});
