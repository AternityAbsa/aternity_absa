import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { Http, Response, Headers } from '@angular/http';
import { WorstAndBestAppsRoutingModule } from './worst-and-best-apps-routing.module';
import { ChartsComponent } from './worst-and-best-apps.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, ChartsRoutingModule, PageHeaderModule],
    declarations: [ChartsComponent]
})



export class ChartsModule {

    constructor() {
  }
}


