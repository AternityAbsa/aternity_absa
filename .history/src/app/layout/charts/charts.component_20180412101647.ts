import { Component, OnInit, Input, Output } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {BlueprismService} from '../../services/BlueprismService';
import { DataLoadService } from '../../services/DataLoadService';
import 'rxjs/add/operator/map';
import { BlueprismModel } from '../../models/BlueprismModel';
import { Observable } from 'rxjs/Observable'; 
import { error } from 'util';
import { BlueprismServices } from '../blueprism-servers/blueprism.service';
import {VarModel}  from '../../models/varModel';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()],
    providers:[BlueprismServices]
})
export class ChartsComponent implements OnInit {
  
    dataArray : any[] = [];
    private robot : string;
    private application: BlueprismModel;
    @Output()  applications: BlueprismModel[]; 
    public machine_name: string;
    errorMessage : "Invalid Data";
    item : any[];
    dateString : Date;
    device_name = new Set ([]);


    constructor(private blueprismService: BlueprismService, private service: BlueprismServices, private dataLoad: DataLoadService,
    private varModel: VarModel) {
    }

    ngOnInit(){
        this.loadApplications();
    }

    loadApplications(){

         this.blueprismService.getBlueprismData().subscribe(
            blue_applications => {

            this.varModel.PHYSICAL_MEMORY_UTIL_AVG = blue_applications['value'].map(blue_applications => blue_applications.PHYSICAL_MEMORY_UTIL_AVG);
            this.varModel.SERVING_DEVICE_NAME = blue_applications['value'].map(blue_applications => blue_applications.SERVING_DEVICE_NAME);
            this.varModel.CPU_UTILIZATION_AVG = blue_applications['value'].map(blue_applications => blue_applications.CPU_UTILIZATION_AVG);
            this.varModel.DISK_QUEUE_LENGTH_MAX = blue_applications['value'].map(blue_applications => blue_applications.DISK_QUEUE_LENGTH_MAX);
           
            this.varModel.USERNAME = blue_applications['value'].map(blue_applications => blue_applications.USERNAME);
            this.varModel.VIRTUAL_MEMORY_UTIL_AVG = blue_applications['value'].map(blue_applications => blue_applications.VIRTUAL_MEMORY_UTIL_AVG);
            this.varModel.NETWORK_READ_AVG = blue_applications['value'].map(blue_applications => blue_applications.NETWORK_READ_AVG);
            this.varModel.NETWORK_WRITE_AVG = blue_applications['value'].map(blue_applications => blue_applications.NETWORK_WRITE_AVG);
            this.varModel.HOUR_RUNNING_TOTAL = blue_applications['value'].map(blue_applications => blue_applications.HOUR_RUNNING_TOTAL);
            this.varModel.DISK_IO_READ_AVG = blue_applications['value'].map(blue_applications => blue_applications.DISK_IO_READ_AVG);
            this.varModel.DISK_IO_WRITE_AVG = blue_applications['value'].map(blue_applications => blue_applications.DISK_IO_WRITE_AVG);
            
            this.device_name = new Set(this.varModel.SERVING_DEVICE_NAME);
            console.log(this.device_name);
           /* console.log(cpu_util_avg);    
            console.log(disk_queue_length);  
            console.log(virtual_memory);
            console.log(network_write_avg);
            console.log(DISK_IO_READ_AVG); **/


            this.barChartData = [
       
                { data: this.varModel.CPU_UTILIZATION_AVG, label: 'Cpu Avg' },
                { data: this.varModel.PHYSICAL_MEMORY_UTIL_AVG, label: 'Memory%' },      
                { data: this.varModel.DISK_QUEUE_LENGTH_MAX, label: 'DQL' },                          
                { data: this.varModel.VIRTUAL_MEMORY_UTIL_AVG, label: 'Virtual Memory' },   
                { data: network_read_avg, label: 'RESPONSE TIME' },
                { data: network_write_avg, label: 'TIME SPENT' } 
            ]; 

           /* this.doughnutChartData = [network_read_avg, network_write_avg, DISK_IO_READ_AVG, DISK_IO_WRITE_AVG]; **/

        }, // Bind to view
        err => {
          // Log errors if any
          console.log(err);
        }
        ); 
    }

    getElements(arr: any[]){
        console.log("Checking");
        for(var item in arr) {
            console.log(item);
           /* return this.x; **/
        }
    }

    // bar chart
    private barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    private barChartLabels: string[] = [ 
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
    /*'PHYSICAL_MEMORY_UTIL_AVG',
    'SERVING_DEVICE_NAME',
    'TIMEFRAME',
    'VIRTUAL_MEMORY_UTIL_AVG',
    'USERNAME',
    'ACCOUNT_NAME' **/
    ];
    private barChartType: string = 'bar';
    private barChartLegend: boolean = true;

    private dataArr: any[] = [{data:[], label:''}];
    private barChartData: any[];

     
  /*  private barChartData: any[] = [
       
        { data: [this.sample, 50, 90, 49, 89, 12, 69], label: 'DQL' },
        { data: [70, 50, 100, 80, 90, 60, 75], label: 'UXI' },

        { data: [89, 48, 40, 19, 100, 27, 90], label: 'MEMORY%' },
        { data: [28, 48, 86, 19, 86, 27, 90], label: 'NO OF CRASHES' },

        { data: [38, 48, 40, 19, 86, 27, 90], label: 'RESPONSE TIME' },
        { data: [20, 50, 90, 100, 89, 12, 69], label: 'TIME SPENT' }

    ]; **/

    // Doughnut
    private doughnutChartLabels: string[] = [
        'DQL',
        'UXI',
        'MEMORY',
        'NO OF CRASHES'

    ];
    private doughnutChartData: number[];
   /* private doughnutChartData: number[] = [350.9887, 450, 100, 90]; **/
    private doughnutChartType: string = 'doughnut';

    // Radar
    private radarChartLabels: string[] = [
        'SERVING_DEVICE_NAME',
        'VIRTUAL_MEMORY_UTIL_AVG',
        'PHYSICAL_MEMORY_UTIL_AVG',
        'CPU_UTILIZATION_AVG',
        'NETWORK_READ_AVG',
        'NETWORK_WRITE_AVG'
    ];
    private radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    private radarChartType: string = 'radar';

    // Pie
    private pieChartLabels: string[] = [
        'SERVING_DEVICE_NAME',
        'VIRTUAL_MEMORY_UTIL_AVG',
        'PHYSICAL_MEMORY_UTIL_AVG',
        'CPU_UTILIZATION_AVG'
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
        { data: [65, 59, 80, 81, 56, 55, 80], label: 'VIRTUAL_MEMORY_UTIL_AVG' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'PHYSICAL_MEMORY_UTIL_AVG' },
        { data: [69, 48, 77, 15, 100, 27, 70], label: 'CPU_UTILIZATION_AVG'},
        { data: [70, 65, 77, 15, 95, 59, 80], label: 'SERVING_DEVICE_NAME'}
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
