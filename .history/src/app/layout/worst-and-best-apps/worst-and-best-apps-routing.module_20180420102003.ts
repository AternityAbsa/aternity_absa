import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorstAndBestAppsComponent } from './worst-and-best-apps.component';

const routes: Routes = [
    {
        path: '',
import { WorstAndBestAppsComponent } from './worst-and-best-apps.component';
component: ChartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule {}
