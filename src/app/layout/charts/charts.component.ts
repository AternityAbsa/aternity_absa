import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AternityService } from '../../services/aternity-service'; 
/* import { ToasterService } from '../../angular2-toaster/angular2-toaster';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar'; **/

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {


    public message: string;
    public values: any[];

    constructor(aternityService: AternityService) {
        this.message = 'Hello from charts constructor';
    }


    public aternityService: AternityService;

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fbss Client Inquiry' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Cif Search' },
        /** Added these */
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fbss Login' },
        { data: [38, 48, 40, 19, 86, 27, 90], label: 'Fbss Launch' }

    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Fbss Client Inquiry',
        'Cif Search',
        'Fbss Login',
        'Fbss Launch'

    ];
    public doughnutChartData: number[] = [350, 450, 100, 90];
    public doughnutChartType: string = 'doughnut';

    // Radar
    public radarChartLabels: string[] = [
        'Inactivity',
        'Cif Search',
        'Fbss Login',
        'Fbss Launch',
        'Outlook',
        'Fbss Client Inquiry',
        'Acrobat'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    // Pie
    public pieChartLabels: string[] = [
        'Fbss Client Inquiry',
        'Cif Search',
        'Fbss Login',
        'Fbss Launch'
    ];
    public pieChartData: number[] = [300, 500, 100, 250];
    public pieChartType: string = 'pie';

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'AF CAF Gauteng East Sales Support [Consumer Banking]',
        'BB Limpopo Premium LP [Distribution and Coverage]',
        'Delivery Chanel Services',
        'Group Administration',
        'Group Credit'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fbss Launch' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fbss Login' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Fbss Client Inquiry'},
        { data: [70, 65, 77, 15, 95, 59, 80], label: 'Cif Search'}
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(80,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(100,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    ngOnInit() {

       /* this._slimLoadingBarService.start();

        this.aternityService
            .getAll<any[]>()
            .subscribe((data: any[]) => this.values = data,
            error => () => {
                this._toasterService.pop('error', 'Damn', 'Something went wrong...');
            },
            () => {
                this._toasterService.pop('success', 'Complete', 'Getting all values complete');
                this._slimLoadingBarService.complete();
            });

            this.aternityService
            .getAll<MyTypedItem[]>()
            .subscribe((data: MyTypedItem[]) => this.values = data,
        } **/
    }

}
