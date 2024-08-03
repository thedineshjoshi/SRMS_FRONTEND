import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { StudentListComponent } from "../student-list/student-list.component";
import { AuthguardService } from "../../service/authguard.service";
import { RegistrationComponent } from "../registration/registration.component";


 const routes: Routes = [
    {
        path:'',component:HomeComponent,children:
        [
            {path:'',redirectTo:'studentlist',pathMatch:'full'},
            {path:"studentlist",component:StudentListComponent,canActivate:[AuthguardService]},
            {path:'registration',component:RegistrationComponent,canActivate:[AuthguardService]}
        ]
    },
    {
        path:'studentlist',component:StudentListComponent,pathMatch:'full'
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule {}
