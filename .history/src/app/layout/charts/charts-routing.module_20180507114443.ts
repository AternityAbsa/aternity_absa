import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: ChartsComponent,
        component: DashboardComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule {}
