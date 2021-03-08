import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ClienteService } from "./client-service/client-service.service";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ClienteService
    ]
})
export class ServiceModule {

}