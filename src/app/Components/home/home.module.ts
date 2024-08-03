import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routes";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StudentListComponent } from "../student-list/student-list.component";
import { RegistrationComponent } from "../registration/registration.component";
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {  provideAnimations } from "@angular/platform-browser/animations";
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from "primeng/messages";
import { ButtonModule } from 'primeng/button';
@NgModule({
    declarations:[HomeComponent,RegistrationComponent],
    imports:[
        ReactiveFormsModule,
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StudentListComponent,
        KeyFilterModule,
        InputTextModule,
        CalendarModule,
        DropdownModule,
        MessagesModule,
        ButtonModule
        

    ],
    exports:[],
    providers:[provideAnimations()]
})
export class HomeModule {
    
}
