import { ChartsModule } from './worst-and-best-apps.module';
import { Http } from '@angular/http';

describe('ChartsModule', () => {
    let worstandbestappModule: ChartsModule;

    beforeEach(() => {
        worstandbestappModule = new ChartsModule();
    });

    it('should create an instance', () => {
        expect(worstandbestappModule).toBeTruthy();
    });
});
