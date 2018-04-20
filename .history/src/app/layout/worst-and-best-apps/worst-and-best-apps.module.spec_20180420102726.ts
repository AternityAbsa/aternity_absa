import { ChartsModule } from './wo.module';
import { Http } from '@angular/http';

describe('ChartsModule', () => {
    let chartsModule: ChartsModule;

    beforeEach(() => {
        chartsModule = new ChartsModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
