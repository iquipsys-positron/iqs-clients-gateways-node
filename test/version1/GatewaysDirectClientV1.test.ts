let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { GatewaysMemoryPersistence } from 'iqs-services-gateways-node';
import { GatewaysController } from 'iqs-services-gateways-node';
import { IGatewaysClientV1 } from '../../src/version1/IGatewaysClientV1';
import { GatewaysDirectClientV1 } from '../../src/version1/GatewaysDirectClientV1';
import { GatewaysClientFixtureV1 } from './GatewaysClientFixtureV1';

suite('GatewaysDirectClientV1', ()=> {
    let client: GatewaysDirectClientV1;
    let fixture: GatewaysClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new GatewaysMemoryPersistence();
        let controller = new GatewaysController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-gateways', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-gateways', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new GatewaysDirectClientV1();
        client.setReferences(references);

        fixture = new GatewaysClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
