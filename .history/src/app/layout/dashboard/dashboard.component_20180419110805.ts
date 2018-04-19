import { Component, OnInit, ViewChild  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataTable, DataTableTranslations, DataTableResource } from '../data-table';
import { films } from './data-table-demo3-data';
/* import { AternityService } from '../../services/aternity service'; **/

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    filmResource = new DataTableResource(films);
    films = [];
    filmCount = 0;

    @ViewChild(DataTable) filmsTable;

    constructor() {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    reloadFilms(params) {
        this.filmResource.query(params).then(films => this.films = films);
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };

    // special params:
    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
}
