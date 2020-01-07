let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { GatewaysMemoryPersistence } from 'iqs-services-gateways-node';
import { GatewaysController } from 'iqs-services-gateways-node';
import { IGatewaysClientV1 } from '../../src/version1/IGatewaysClientV1';
import { GatewaysMemoryClientV1 } from '../../src/version1/GatewaysMemoryClientV1';
import { GatewaysClientFixtureV1 } from './GatewaysClientFixtureV1';

suite('GatewaysMemoryClientV1', ()=> {
    let client: GatewaysMemoryClientV1;
    let fixture: GatewaysClientFixtureV1;

    suiteSetup((done) => {
        client = new GatewaysMemoryClientV1();
        fixture = new GatewaysClientFixtureV1(client);

        done();
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
