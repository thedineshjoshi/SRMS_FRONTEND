import { Routes } from "@angular/router";
import { StudentListComponent } from "./student-list.component";

export const routes: Routes = [
    {path:'studentlist',component:StudentListComponent,pathMatch:'full'}
]