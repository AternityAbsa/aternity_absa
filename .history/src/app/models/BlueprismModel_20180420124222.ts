import * as models from '../models/models';

export class BlueprismModel  {

    /** Host Resources */
    CPU_UTILIZATION_AVG : number;
    DISK_IO_READ_AVG : number;
    DISK_IO_WRITE_AVG : number;
    DISK_QUEUE_LENGTH_MAX : number;
    HOUR_RUNNING_TOTAL : number;
    NETWORK_READ_AVG : number;
    NETWORK_WRITE_AVG : number;
    PHYSICAL_MEMORY_UTIL_AVG : number;
    SERVING_DEVICE_NAME : string;
    TIMEFRAME : Date;
    VIRTUAL_MEMORY_UTIL_AVG : number;
    USERNAME : string;
    ACCOUNT_NAME : string;

    /** Device Inventory */
    AGENT_CURRENT_STATUS : string;
    LAST_REPORTING_DATETIME : number;
    MICROSOFT_STABILITY_INDEX : number;
    DEVICE_CPU_GENERATION : number;
    DEVICE_CPU_CORES = [];
    AGENT_VERSION : number;

    /** Application Raw */
    UXI : number
    UXI_WEIGHT: number;
    ACTIVITY_VOLUME: number;
    CRASHES: number;
    HANG_TIME: number;
    PERFORMANCE_INDEX: number;
    APPLICATION: string[] = [];
    ACTIVE_TIME: any = [];
    ACTIVITY_SCORE : number[] = [];
    ACTIVITY_RESPONSE_AVG : number[] = [];

    /** Best and Worst users */

    Activity : string;
    Application : string;
    


    set = new Set ([]);

}

