import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorstAndBestAppsModule as Ng2Charts1 } from 'ng2-charts';
import { Http, Response, Headers } from '@angular/http';
import { WorstAndBestAppsRoutingModule } from './worst-and-best-apps-routing.module';
import { WorstAndBestAppsComponent } from './worst-and-best-apps.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, WorstAndBestAppsRoutingModule, PageHeaderModule],
    declarations: [WorstAndBestAppsComponent]
})



export class WorstAndBestAppsModule {

    constructor() {
  }
}


