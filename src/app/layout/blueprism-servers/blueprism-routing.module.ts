import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlueprismComponent } from './blueprism.component';

const routes: Routes = [
    {
        path: '',
        component: BlueprismComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlueprismRoutingModule {}
