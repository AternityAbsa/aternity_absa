import { Component, OnInit, Input, Output } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {BlueprismService} from '../../services/BlueprismService';
import { DataLoadService } from '../../services/DataLoadService';
import 'rxjs/add/operator/map';
import { BlueprismModel } from '../../models/BlueprismModel';
import { Observable } from 'rxjs/Observable'; 
import { error } from 'util';
import { BlueprismServices } from '../blueprism-servers/blueprism.service';
import { Subscription } from 'rxjs/Subscription';

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
    private application: any[];
    private timeframe = new  Set(['']); 
    @Output()  applications: BlueprismModel[]; 
    public machine_name: string;
    errorMessage : "Invalid Data";
    item : number;
    dateString : Date;
    device_name = new  Set(['']); 
    deviceName : any;
    time_Frame : any;
    interval : any;
    subscription: Subscription;
    doughnut_time : number[];
    radar_uxi: any;
    radar_crashes: any;

    private barChartType: string = 'bar';
    private barChartLegend: boolean = true;
    private currentNode;
    private barChartData: any[];
    private allTheData : {}; 

    // bar chart
    private barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    private barChartLabels: string[] = 
    ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
    ]; 

    // Doughnut
    private doughnutChartLabels: string[] = [
        'Cpu Cores',
        'UXI',
        'MEMORY',
        'NO OF CRASHES'
    ];

   /* private doughnutChartData = []; **/
    private doughnutChartData: number[] = [78, 99, 89, 99];  
    private doughnutChartType: string = 'doughnut';

    // Radar
    private radarChartLabels: string[] = [
        'UXI',
        'UXI_WEIGHT',
        'ACTIVITY_VOLUME',
        'CRASHES',
        'HANG_TIME',
        'PERFORMANCE_INDEX',
        'PERFORMANCE_WEIGHT'
    ];

       /* private radarChartData: any; **/ 
     private radarChartData: any = [
      /*  { data: [0, 5, 0, 5, 5, 5, 4.542], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' } **/
    ]; 

    private radarChartType: string = 'radar';

    constructor(private blueprismService: BlueprismService, private service : BlueprismServices, private dataLoad : DataLoadService,
    private dataModel : BlueprismModel) {
    }

    ngOnInit(){
       
            /** refresh every 5 seconds 
            this.interval = setInterval(() => { 
            this.loadBarChart();
            }, 1000); **/

           /* this.interval = setInterval(() => { 
            this.loadDoughnut();
           }, 1000); 

            this.interval = setInterval(() => { 
            this.loadRadar();   
           }, 2000); **/
            /*this.loadBarChart(); **/
            /*this.loadDoughnut(); **/
            this.radarChartData = this.loadRadar(); 
            
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
      }

    loadBarChart(){

           this.blueprismService.getBlueprismData().subscribe(
            blue_applications => {
            this.dataModel.PHYSICAL_MEMORY_UTIL_AVG = blue_applications['value'].map(blue_applications => blue_applications.PHYSICAL_MEMORY_UTIL_AVG);
            let blueBlueRobots = blue_applications['value'].map(blue_applications => blue_applications.SERVING_DEVICE_NAME);
            this.dataModel.CPU_UTILIZATION_AVG = blue_applications['value'].map(blue_applications => blue_applications.CPU_UTILIZATION_AVG);
            this.dataModel.DISK_QUEUE_LENGTH_MAX = blue_applications['value'].map(blue_applications => blue_applications.DISK_QUEUE_LENGTH_MAX);
           
            let username = blue_applications['value'].map(blue_applications => blue_applications.USERNAME);
            this.dataModel.VIRTUAL_MEMORY_UTIL_AVG = blue_applications['value'].map(blue_applications => blue_applications.VIRTUAL_MEMORY_UTIL_AVG);
            this.dataModel.NETWORK_READ_AVG = blue_applications['value'].map(blue_applications => blue_applications.NETWORK_READ_AVG);
            this.dataModel.NETWORK_WRITE_AVG = blue_applications['value'].map(blue_applications => blue_applications.NETWORK_WRITE_AVG);
            this.dataModel.HOUR_RUNNING_TOTAL = blue_applications['value'].map(blue_applications => blue_applications.HOUR_RUNNING_TOTAL);
            this.dataModel.DISK_IO_READ_AVG = blue_applications['value'].map(blue_applications => blue_applications.DISK_IO_READ_AVG);
            this.dataModel.DISK_IO_WRITE_AVG = blue_applications['value'].map(blue_applications => blue_applications.DISK_IO_WRITE_AVG);
            this.device_name = blue_applications['value'].map(blue_applications => blue_applications.SERVING_DEVICE_NAME);
            this.timeframe = blue_applications['value'].map(blue_applications => blue_applications.TIMEFRAME);          

            /** Remove Duplicates **/
            this.deviceName = new Set (this.device_name); 
            this.time_Frame = new Set(this.timeframe);

            console.log(this.deviceName);

             this.barChartData = [
                { data: this.dataModel.CPU_UTILIZATION_AVG, label: 'CPU Avg' },
                { data: this.dataModel.PHYSICAL_MEMORY_UTIL_AVG, label: 'MEMORY%' },    
                { data: this.dataModel.DISK_QUEUE_LENGTH_MAX, label: 'DQL' },   
                { data: this.dataModel.VIRTUAL_MEMORY_UTIL_AVG, label: 'Virtual Memory' }
            ];  

             this.allTheData = {
                    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
                    bars: [ 
                        { data: this.dataModel.CPU_UTILIZATION_AVG, label: 'CPU Avg' },
                        { data: this.dataModel.PHYSICAL_MEMORY_UTIL_AVG, label: 'MEMORY%' },     
                         { data: this.dataModel.DISK_QUEUE_LENGTH_MAX, label: 'DQL' },   
                         { data: this.dataModel.VIRTUAL_MEMORY_UTIL_AVG, label: 'Virtual Memory' }
                    ],
                    drilldown: {
                        'Sunday': {
                            labels: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'],
                            bars: [
                                { data: this.dataModel.DISK_IO_READ_AVG, label: 'DISK_IO_READ_AVG' },
                                { data: this.dataModel.DISK_IO_WRITE_AVG, label: 'DISK_IO_WRITE_AVG'},
                                { data: this.dataModel.NETWORK_READ_AVG, label: 'NETWORK_READ_AVG'},
                                { data: this.dataModel.NETWORK_WRITE_AVG, label: 'NETWORK_WRITE_AVG'}
                            ],
                            drilldown: {
                                 '6am' : {
                                    labels: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm'],
                                    bars: [
                                        { data: this.dataModel.HOUR_RUNNING_TOTAL, label: 'HOUR_RUNNING_TOTAL'},
                                        { data: this.dataModel.NETWORK_READ_AVG, label: 'NETWORK_READ_AVG'},
                                        { data: this.dataModel.NETWORK_WRITE_AVG, label: 'NETWORK_WRITE_AVG'}
                                    ],
                                }
                            }
                    }, 
                 }  
             }   
        }, // Bind to view
        err => {
          // Log errors if any
          console.log(err);
        }
        ); 
    }

    loadDoughnut(){
        this.blueprismService.deviceInventoryData().subscribe(
            blue_applications => {

            this.dataModel.DEVICE_CPU_CORES = blue_applications['value'].map(blue_applications => blue_applications.DEVICE_CPU_CORES);
            this.dataModel.AGENT_VERSION = blue_applications['value'].map(blue_applications => blue_applications.AGENT_VERSION);        

            console.log(this.dataModel.DEVICE_CPU_CORES);
           
            this.doughnutChartData = this.dataModel.DEVICE_CPU_CORES;  
        },
        err => {
          console.log(err);
        }
        );  
    }

    loadRadar() : any[] {
        let radarData : any[] = [];
        this.blueprismService.applicationRawData().subscribe(
            blue_applications => {

            this.dataModel.UXI = blue_applications['value'].map(blue_applications => blue_applications.UXI);
            this.dataModel.UXI_WEIGHT = blue_applications['value'].map(blue_applications => blue_applications.UXI_WEIGHT);
            this.dataModel.CRASHES = blue_applications['value'].map(blue_applications => blue_applications.CRASHES);
            this.dataModel.PERFORMANCE_INDEX = blue_applications['value'].map(blue_applications => blue_applications.PERFORMANCE_INDEX);
            this.dataModel.ACTIVITY_VOLUME = blue_applications['value'].map(blue_applications => blue_applications.ACTIVITY_VOLUME);
            this.dataModel.HANG_TIME = blue_applications['value'].map(blue_applications => blue_applications.HANG_TIME);
            
            this.radar_uxi =  this.dataModel.UXI; 
            this.radar_crashes = this.dataModel.PERFORMANCE_INDEX;
            /*console.log(this.radar_uxi); **/
            
              radarData = [
                { data: [10, 5, 10, 5, 5, 5, 4.542], label: 'Series A' },
                { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
            ];
            /*console.log(radarData);**/
            this.radarChartData = radarData;  
            console.log(this.radarChartData)   
        },
        err => {
          console.log(err);
        }
        ); 
        console.log(radarData);     
        return this.radarChartData = [
            { data: [10, 5, 10, 5, 5, 5, 4.542], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ]; 
    }

    getElements(arr: any[]){
        console.log("Checking");
        for(var item in arr) {
            console.log(item);
           /* return this.x; **/
        }
    }
    
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
        if (e.active.length === 0) { 
			return;
		}
		let label = e.active[0]._model.label;

		this.currentNode = this.currentNode || this.allTheData;
		this.currentNode = this.currentNode.drilldown[label];
		this.barChartLabels = this.currentNode.labels;
    }

    private chartHovered(e: any): void {
       /** console.log(e); */
    }

    selectedValue : String;

    /*private updateData(event: any){

        const data1 = [20, 50, 90];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data1;
        this.barChartData = clone; **/
        
       /* this.selectedValue = event.target.value;  
        if (this.selectedValue !== null){
        const data1 = this.dataModel.CPU_UTILIZATION_AVG;
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data1;
        this.barChartData = clone;
        console.log(data1);
        }  
    } **/


    private randomize(): void {
        // Only Change1 3 values
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
