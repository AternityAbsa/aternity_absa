import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AternityProvider } from '../providers/aternity_api'; 
import { BlueprismModel} from './models/BlueprismModel';
import { BusinessAreaModel} from './models/business_area_model';
import { BlueprismService} from './services/BlueprismService';
import { DataLoadService } from './services/DataLoadService';
import { BusinessService} from './services/business_area_service';
import {OdataLabels} from './models/OdataLabels';
import {} from './server-error';

export function createTranslateLoader(http: HttpClient) {

    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [
         AuthGuard, 
         BlueprismService,
         BusinessService,
         DataLoadService,
         OdataLabels
         ],
    bootstrap: [AppComponent]
})
export class AppModule {}
