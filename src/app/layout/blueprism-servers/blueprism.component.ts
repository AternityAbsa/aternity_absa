import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {BlueprismService} from '../../services/BlueprismService';
import 'rxjs/add/operator/map';
import { BlueprismModel } from '../../models/models';
import { BusinessAreaModel } from '../../models/business_area_model';
import { Observable } from 'rxjs/Observable'; 
import { error } from 'util';
import { BusinessService } from '../../services/business_area_service';
import { BlueprismServices} from '../blueprism-servers/blueprism.service';


@Component({
    selector: 'app-charts',
    templateUrl: './blueprism.component.html',
    styleUrls: ['./blueprism.component.scss'],
    animations: [routerTransition()],
    providers:[BlueprismService, BusinessService]
})
export class BlueprismComponent implements OnInit {
  
    private dataArray : number; 
    private robot : BlueprismModel;
    private application: BlueprismModel[];
    @Input()  applications: BlueprismModel[];
    public machine_name: string;
    errorMessage : "Invalid Data";
    blues = [];
    public sho : any;
    businessArea : string;

   
    constructor(private blueprismService: BlueprismService, private business_area: BusinessService,
                private blue_services: BlueprismServices) {
        /*this._getRobots(); **/
    }

    loadBusinessArea(){

    }

    _getRobots(){
       /* this.dataArray = this.blueprismService.getBlueprismData(); **/
        return this.dataArray;
    } 

    ngOnInit(){
        /* this.loadApplications(); **/

     /* this.blueprismService.getBlueprismData()
      .subscribe(
      robots => {
        
        this.dataArray = this.robots.indexOf(this.sho, 1)
        this.blueprismService.blueprismRobots = this.robotics = robots;
        console.log(robots);
      },
      err => {
        console.log(err);
      }
      );  **/

       /*this.dataArray = this.blueprismService.getBlueprismData();

        this._getRobots(); **/
       /* this.blueprismService.getBlueprismData()
        .subscribe(
            (res:any)=>
            this.dataArray  =  res.data,
            (err:any) => console.debug('ERROR:',err),
            () => console.debug(this.errorMessage)   **/
            
           /* let SERVING_DEVICE_NAME = res['SERVING_DEVICE_NAME'].map(res => res.SERVING_DEVICE_NAME)
            let DEVICE_CPU_FREQUENCY = res['DEVICE_CPU_FREQUENCY'].map(res => res.DEVICE_CPU_FREQUENCY)
            let IP_ADDRESS = res['IP_ADDRESS'].map(res => res.IP_ADDRESS)
            this.blues = SERVING_DEVICE_NAME; **/
       /* ) **/
    }


    loadApplications(){

        this.blueprismService.getBlueprismData().subscribe(
            applications => {
            this.application = applications;
            this.blue_services.applications =applications;
        }, // Bind to view
        err => {
          // Log errors if any
          console.log(err);
        }
        );
    }

    // bar chart
    private barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    private barChartLabels: string[] = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    private barChartType: string = 'bar';
    private barChartLegend: boolean = true;

    private barChartData: any[] = [

       /* {data: [this.blueprismService.getBlueprismData()]}, **/
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fbss Client Inquiry' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Cif Search' },
        /** Added these */
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fbss Login' },
        { data: [38, 48, 40, 19, 86, 27, 90], label: 'Fbss Launch' }

    ];

    // Doughnut
    private doughnutChartLabels: string[] = [
        'Fbss Client Inquiry',
        'Cif Search',
        'Fbss Login',
        'Fbss Launch'

    ];
    private doughnutChartData: number[] = [350, 450, 100, 90];
    private doughnutChartType: string = 'doughnut';

    // Radar
    private radarChartLabels: string[] = [
        'Inactivity',
        'Cif Search',
        'Fbss Login',
        'Fbss Launch',
        'Outlook',
        'Fbss Client Inquiry',
        'Acrobat'
    ];
    private radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    private radarChartType: string = 'radar';

    // Pie
    private pieChartLabels: string[] = [
        'Fbss Client Inquiry',
        'Cif Search',
        'Fbss Login',
        'Fbss Launch'
    ];
    private pieChartData: number[] = [300, 500, 100, 250];
    private pieChartType: string = 'pie';

    // PolarArea
    private polarAreaChartLabels: string[] = [
        'AF CAF Gauteng East Sales Support [Consumer Banking]',
        'BB Limpopo Premium LP [Distribution and Coverage]',
        'Delivery Chanel Services',
        'Group Administration',
        'Group Credit'
    ];
    private polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    private polarAreaLegend: boolean = true;

    private polarAreaChartType: string = 'polarArea';

    // lineChart
    private lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 80], label: 'Fbss Launch' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fbss Login' },
        { data: [69, 48, 77, 15, 100, 27, 70], label: 'Fbss Client Inquiry'},
        { data: [70, 65, 77, 15, 95, 59, 80], label: 'Cif Search'}
    ];
    private lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    private lineChartOptions: any = {
        responsive: true
    };
    private lineChartColors: Array<any> = [
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
    private lineChartLegend: boolean = true;
    private lineChartType: string = 'line';

    // events
    private chartClicked(e: any): void {
        // console.log(e);
    }

    private chartHovered(e: any): void {
        // console.log(e);
    }

    private randomize(): void {
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

}
