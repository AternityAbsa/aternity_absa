import { BusinessAreaModel } from '../models/business_area_model';
import { Injectable } from '@angular/core';


@Injectable()
export class BusinessService {
    public businessArea: BusinessAreaModel;
    public businessAreas: Array<BusinessAreaModel>;
}