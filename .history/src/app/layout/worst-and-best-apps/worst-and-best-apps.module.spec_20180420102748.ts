import { WorstAndBestAppsModule } from './worst-and-best-apps.module';
import { Http } from '@angular/http';

describe('ChartsModule', () => {
    let chartsModule: WorstAndBestAppsModule;

    beforeEach(() => {
        chartsModule = new WorstAndBestAppsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
