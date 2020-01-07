let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { GatewaysMemoryPersistence } from 'iqs-services-gateways-node';
import { GatewaysController } from 'iqs-services-gateways-node';
import { GatewaysHttpServiceV1 } from 'iqs-services-gateways-node';
import { IGatewaysClientV1 } from '../../src/version1/IGatewaysClientV1';
import { GatewaysHttpClientV1 } from '../../src/version1/GatewaysHttpClientV1';
import { GatewaysClientFixtureV1 } from './GatewaysClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('GatewaysRestClientV1', ()=> {
    let service: GatewaysHttpServiceV1;
    let client: GatewaysHttpClientV1;
    let fixture: GatewaysClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new GatewaysMemoryPersistence();
        let controller = new GatewaysController();

        service = new GatewaysHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-gateways', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-gateways', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-gateways', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new GatewaysHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new GatewaysClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
