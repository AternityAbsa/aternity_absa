import { BlueprismServersModule } from './blueprism-servers.module';
import { Http } from '@angular/http';

describe('BlueprismServersModule', () => {
    let blueprismServersModule: BlueprismServersModule;

    beforeEach(() => {
        blueprismServersModule = new BlueprismServersModule();
    });

    it('should create an instance', () => {
        expect(blueprismServersModule).toBeTruthy();
    });
});
