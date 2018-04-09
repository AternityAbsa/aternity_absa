import { BusinessUnitModel } from '../models/business_units_model';
import { Injectable } from '@angular/core';


@Injectable()
export class BusinessUnitService {
    public businessArea: BusinessUnitModel;
    public businessAreas: Array<BusinessUnitModel>;
}